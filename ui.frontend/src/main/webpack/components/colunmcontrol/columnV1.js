window.onload = function() {
    // Execute only if not in AEM authoring mode
    if (typeof Granite === 'undefined' || typeof Granite.author === 'undefined') {

        const originalStructureMap = {};
        let lastWidth = $(window).width();

        // Save the initial structure of .container_items elements
        $('.container_items').each(function() {
            const $container = $(this);
            const $row = $container.closest('.rows');
            const containerId = $row.attr('id');

            if (containerId) {
                const structure = $container.find('div[class^="col-md-"]').map(function() {
                    const $this = $(this);
                    const responsiveGridContent = $this.find('.responsiveGrid').children().detach();
                    return {
                        content: responsiveGridContent,
                        classes: $this.attr('class')
                    };
                }).get();

                originalStructureMap[containerId] = structure;
            }
        });

        // Unwrap .responsiveGrid and .col-md- elements
        function unwrapContent($container) {
            $container.find('div[class^="col-md-"]').each(function() {
                $(this).find('.responsiveGrid').children().unwrap();
                $(this).children().unwrap();
            });
            console.log("Content unwrapped");
        }

        // Restore original structure from saved map
        function rewrapContent($container, containerId) {
            if (originalStructureMap[containerId]) {
                $container.empty();
                originalStructureMap[containerId].forEach(function(item) {
                    const $colDiv = $('<div>').addClass(item.classes);
                    const $responsiveGridDiv = $('<div>').addClass('responsiveGrid');
                    $responsiveGridDiv.append(item.content);
                    $colDiv.append($responsiveGridDiv);
                    $container.append($colDiv);
                });
                console.log("Content rewrapped");
            }
        }

        // Process layout adjustments based on variation and width
        function processVariation($container, variation, width) {
            const $row = $container.closest('.rows');
            const containerId = $row.attr('id');

            if ((variation === 'variationone' && width < 767) ||
                (variation === 'variationtwo' && width < 993) ||
                (variation === 'variationthree')) {
                unwrapContent($container);
            }

            if ((variation === 'variationone' && width >= 767) ||
                (variation === 'variationtwo' && width >= 993) ||
                (variation === 'variationthree')) {
                rewrapContent($container, containerId);
            }
        }

        // Update columns layout based on current window width and variations
        function updateColumns() {
            const width = $(window).width();
            $('.container_items').each(function() {
                const $container = $(this);
                const $row = $container.closest('.rows');
                const variation = $row.data('variation');

                if (variation) {
                    processVariation($container, variation, width);

                    // Process nested variations
                    $container.find('[data-variation]').each(function() {
                        const $nestedRow = $(this).closest('.rows');
                        const nestedVariation = $nestedRow.data('variation');
                        processVariation($nestedRow.find('.container_items'), nestedVariation, width);
                    });
                }
            });
        }

        // Handle window resize and orientation change
        function handleResize() {
            const width = $(window).width();

            $('.container_items').each(function() {
                const $container = $(this);
                const $row = $container.closest('.rows');
                const variation = $row.data('variation');

                if (variation) {
                    if ((variation === 'variationone' && ((lastWidth < 767 && width >= 767) || (lastWidth >= 767 && width < 767))) ||
                        (variation === 'variationtwo' && ((lastWidth < 993 && width >= 993) || (lastWidth >= 993 && width < 993))) ||
                        (variation === 'variationthree' && ((lastWidth < 1200 && width >= 1200) || (lastWidth >= 1200 && width < 1200)))) {
                        updateColumns();
                        console.log(`Resize handled for ${variation}`);
                    }
                }
            });

            lastWidth = width;
        }

        // Handle page reload and reattach content
        function reloadHandler() {
            $('.container_items').each(function() {
                const $container = $(this);
                const $row = $container.closest('.rows');
                const containerId = $row.attr('id');

                if (containerId) {
                    $container.empty();
                    rewrapContent($container, containerId);
                }
            });

            updateColumns();
            console.log("Reload handled: content reattached and columns updated");
        }

        // Initial setup and event listener for window resize
        $(document).ready(function() {
            if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
                reloadHandler();
            } else {
                updateColumns();
            }
            $(window).on('resize orientationchange', handleResize);
        });
    }
};
