if (typeof Granite === 'undefined' || typeof Granite.author === 'undefined') {
    $(document).ready(function() {
        const originalHtmlMap = {};

        $('.container_items').each(function() {
            const $container = $(this);
            const containerId = $container.parent('.rows').attr('id');

            if (containerId) {
                $container.find('div.col-md-8, div.col-md-4, div.col-md-3,div.col-md-2,div.col-md-6').each(function() {
                    const $this = $(this);
                    const $responsiveGrid = $this.find('.responsiveGrid');

                    if ($responsiveGrid.length === 0 || $responsiveGrid.children().length === 0) {
                        $this.remove();
                    }
                });

                originalHtmlMap[containerId] = $container.html();
            }
        });

        function updateColumns() {
            const width = $(window).width();

            $('.container_items').each(function() {
                const $container = $(this);
                const containerId = $container.parent('.rows').attr('id');

                if (containerId && !containerId.includes('main')) {
                    if (width < 993) {
                        $container.find('div.col-md-8, div.col-md-4, div.col-md-3,div.col-md-2,div.col-md-6').each(function() {
                            const $this = $(this);
                            $this.find('.responsiveGrid').children().unwrap();
                            $this.children().unwrap();
                        });
                    } else {
                        if (originalHtmlMap[containerId]) {
                            $container.html(originalHtmlMap[containerId]);
                        }
                    }
                } else if (containerId && containerId.includes('main')) {
                    if (width < 767) {
                        $container.find('div.col-md-8, div.col-md-4, div.col-md-3,div.col-md-2,div.col-md-6').each(function() {
                            const $this = $(this);
                            $this.find('.responsiveGrid').children().unwrap();
                            $this.children().unwrap();
                        });
                    } else {
                        if (originalHtmlMap[containerId]) {
                            $container.html(originalHtmlMap[containerId]);
                        }
                    }
                }
            });
        }

        $(window).on('resize orientationchange', updateColumns);
        $(window).trigger('resize');
    });
}
