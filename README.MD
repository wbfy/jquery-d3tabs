# jQuery 3D Tabs Control
## Version 1.1.1

## Synopsis
This is a simple jQuery plugin control that allows easy creation of a tabbed interface.
Tabs can operate in the normal way but each tab can also be a tab set with 'sub tabs' behind it. Hence the name: 3D Tabs.

## Demo
View the demo: https://websitesbuiltforyou.com/demos/jquery/d3tabs/

## Installation And Usage

### Basic HTML Markup
```HTML
    <div class="d3tabs-parent-container">

        <ul class="tab-container clearfix">
            <li>
                <ul class="tab-set-1">
                    <li d3tabs-id="tab-set-1-main-tab">Tab Set 1 Main Tab</li>
                    <li d3tabs-id="tab-set-1-sub-tab-1">Tab Set 1 Sub Tab 1</li>
                    <li d3tabs-id="tab-set-1-sub-tab-2">Tab Set 1 Sub Tab 2</li>
                </ul>
            </li>
            <li>
                <ul class="tab-set-2">
                    <li d3tabs-id="tab-set-2-main-tab">Tab Set 2 Main Tab</li>
                </ul>
            </li>
        </ul>

        <div class="tab-content-container">
            <div id="tab-set-1-main-tab">
                <p>
                    This is the main tab of tab set 1
                </p>
                <input type="submit" d3tabs-id="tab-set-1-sub-tab-1" value="Click here to activate tab set 1 sub tab 1">
                <input type="submit" d3tabs-id="tab-set-1-sub-tab-2" value="Click here to activate tab set 1 sub tab 2">
                <input type="submit" d3tabs-id="tab-set-3-main-tab" value="Click here to activate tab set 3 main tab">
            </div>
            <div id="tab-set-1-sub-tab-1">
                <p>
                    This is sub tab 1 of tab set 1
                </p>
                <input type="submit" d3tabs-id="tab-set-1-main-tab" value="Click here to close sub tab">
            </div>
            <div id="tab-set-1-sub-tab-2">
                <p>
                    This is sub tab 2 of tab set 1
                </p>
                <p>
                    x - use the x to close tab
                </p>
            </div>

            <div id="tab-set-2-main-tab">
                <p>
                    This is the main tab of tab set 2
                </p>
            </div>
        </div>
    </div>
```
You can use any content, CSS class names and styles you want as long as you keep the basic structure of UL>LI>UL>LI for the tabs-container and DIV>DIV for the tab content container.
Any element within the tab content container with an attribute of d3tabs-id will be made clickable. When clicked, the d3tabs-id will be used to determine which tab is activated.
Likewise, the d3tabs-id attribute is used on the tab to identify which content to show.

### Javascript
Include the script file in your page header after jQuery:
```HTML
    <script src="dist/jquery-d3tabs.min.js" type="text/javascript"></script>
```
Initialise the control:
```Javascript
        $(document).ready(
            function() {
                $('.d3tabs-parent-container').d3tabs();
            }
        );
```
And that's it!

## Contributors
Steve Perkins

## Licence
The class is licenced under the MIT licence

Copyright (c) 2015 Steve Perkins, Websites Built For You
