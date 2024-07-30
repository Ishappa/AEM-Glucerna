

jQuery(document).ready(function($) {
    if (typeof Granite === 'undefined' || typeof Granite.author === 'undefined') {
        const originalHtmlMap = {};

        $('.container_items').each(function() {
            const $container = $(this);
            const $row = $container.closest('.rows');
            const containerId = $row.attr('id');

            if (containerId) {
                $container.find('div[class^="col-md-"]').each(function() {
                    const $this = $(this);
                    const $responsiveGrid = $this.find('.responsiveGrid');

                    if ($responsiveGrid.length === 0 || $responsiveGrid.children().length === 0) {
                        $this.remove();
                    }
                });

                originalHtmlMap[containerId] = $container.html();
            }
        });

        function processVariation($container, variation, width) {
            if (variation === 'variationone' && width < 767) {
                $container.find('div[class^="col-md-"]').each(function() {
                    const $this = $(this);
                    $this.find('.responsiveGrid').children().unwrap();
                    $this.children().unwrap();
                });
            } else if (variation === 'variationtwo' && width < 993) {
                $container.find('div[class^="col-md-"]').each(function() {
                    const $this = $(this);
                    $this.find('.responsiveGrid').children().unwrap();
                    $this.children().unwrap();
                });
            } else if (variation === 'variationthree') {
                $container.find('div[class^="col-md-"]').each(function() {
                    const $this = $(this);
                    $this.find('.responsiveGrid').children().unwrap();
                    $this.children().unwrap();
                });
            }
        }

        function updateColumns() {
            const width = $(window).width();

            $('.container_items').each(function() {
                const $container = $(this);
                const $row = $container.closest('.rows');
                const containerId = $row.attr('id');
                const variation = $row.data('variation');

                if (containerId) {
                    if (originalHtmlMap[containerId]) {
                        $container.html(originalHtmlMap[containerId]);
                    }

                    if (variation) {
                        processVariation($container, variation, width);
                    }

                    // Process nested variations
                    $container.find('[data-variation]').each(function() {
                        const $nestedRow = $(this).closest('.rows');
                        const nestedVariation = $nestedRow.data('variation');
                        processVariation($nestedRow.find('.container_items'), nestedVariation, width);
                    });
                }
            });
        }

        $(window).on('resize orientationchange', updateColumns);
        $(window).trigger('resize');
    }
});
