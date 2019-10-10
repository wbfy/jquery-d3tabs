/**
 * The MIT License
 *
 * jquery-d3tabs
 * Copyright (c) 2015-2017 wbfy
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * For more visit https://websitesbuiltforyou.com/javascript/jquery/d3tabs
 */
(function ($) {
    $.fn.d3tabs = function (options) {
        var defaults = {
            onTabChange: '',
            defaultTab: '',
            widthBreakpoint: 600
        };
        var settings = $.extend({}, defaults, options);

        var $container = $(this),
            $tabsContainer = $('div', $container).first(),
            $tabs = $('>ul >li', $tabsContainer),
            $contentsContainer = $('div:eq(1)', $container),
            $contents = $('>div', $contentsContainer),
            // TODO: Wrong selector for default tab
            $defaultTab = $('#' + settings.selectedTab, $tabs);

        // If default tab doesn't exist, use first in list instead
        if ($defaultTab.length == 0) {
            $defaultTab = $('>ul >li', $tabs.first()).first();
        }

        // Tabs will take up 100% of container width
        var tabWidth = (100 / $tabs.length).toFixed(2) + '%';

        $('>ul, >ul >li >ul', $tabsContainer).css(
            {
                listStyleType: 'none',
                margin: '0',
                padding: '0'
            }
        );
        $($tabs).css(
            {
                float: 'left',
                cursor: 'pointer'
            }
        );

        // Add close buttons to each sub tab
        $tabs.each(
            function () {
                var $close = $('<span style="float:right;margin-right:1em;z-index:10" title="Close">x</span>').click(closeTab);
                $(this).css('width', tabWidth);
                $('>ul >li', this)
                    .css('width', '100%')
                    .not(':first')
                    .append($close)
                    .hide();
            }
        );
        // Activate close buttons
        // $('.d3tabs-btn-close', $tabs).click(closeTab);

        // Activate tabs
        $('>ul >li', $tabs).click(switchTab);

        // Activate any sub tab clickables
        $('[d3tabs-id]', $contents).click(switchTab);

        // Show default tab content and hide other content
        switchTab.call($defaultTab);

        function switchTab(event) {
            var $me = $(this),
                id = $me.attr('d3tabs-id');
            if (typeof id === 'undefined') {
                return false;
            }
            var $tab = $('[d3tabs-id=' + id + ']', $tabsContainer);

            if (typeof event !== 'undefined') {
                event.preventDefault();
            }

            $('>ul >li', $tabs).removeClass('selected');
            $tab.siblings().hide();
            $tab.addClass('selected').show();

            $contents.hide();

            $('#' + id, $contentsContainer).show();

            if (typeof settings.onTabChange === 'function') {
                settings.onTabChange.call($me);
            }
        };

        function closeTab(event) {
            var $me = $(this);

            if (typeof event !== 'undefined') {
                event.stopPropagation();
            }
            switchTab.call($me.parent().siblings().first());
        };

        function resize() {
        }
    };
})(jQuery);
