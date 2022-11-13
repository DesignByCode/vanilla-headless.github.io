---
layout: docs
title: Menu (Dropdown)
permalink: /documentation/dropdown/
---

# Menu (Dropdown) 

The dropdown component allow you to create a custom web accessible dropdown with keyboard and mouse events.  

<iframe class="w-full h-[350px] rounded-md" src="{{ "/iframes/dropdown.html" | absolute_url }}"></iframe>

{% include parts/docs/import.liquid %}

## Basic example (no styling)

> Use additional HTML and CSS to make it unique.

<div class="not-prose" markdown="0">
{% highlight html linenos  %}
<headless-dropdown>
  <button id="menu-button" type="button" aria-expanded="true" aria-haspopup="true">Dropdown</button>
  <div aria-labelledby="menu-button" role="menu" aria-orientation="vertical" tabindex="-1">
      <a href="#" role="menuitem" id="menu-item-0">Account settings</a>
      <a href="#" role="menuitem" id="menu-item-1">Support</a>
      <a href="#" role="menuitem" id="menu-item-2">License</a>
  </div>
</headless-dropdown>
{% endhighlight %}
</div>

## Styled with TailwindCSS
> The example require [TailwindCSS](https://tailwindcss.com/) and  [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
<div class="not-prose" markdown="0">
{% highlight html linenos  %}
<headless-dropdown popper offset="0 10" placement="bottom-end bottom-start" class="relative inline-block text-left">
  <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
    Options
    <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg>
  </button>
    <div aria-labelledby="menu-button" class=" absolute w-56">
      <div class="animate-[open_0.15s_ease] origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" tabindex="-1">
        <div class="py-1" role="none">
          <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
          <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
          <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
          <form method="POST" action="#" role="none">
            <button type="submit" class="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
          </form>
        </div>
      </div>
    </div>
</headless-dropdown>
{% endhighlight %}
</div>




## Accessibility notes
### Focus management
Clicking on ```button``` set focus to it. Focus will be removed by pressing ```Escape``` key and clicking outside the target element.

### Mouse interaction
Clicking on ```button``` will toggle on state of dropdown component. Clicking off the target element will close all dropdown 
components on page.

### Keyboard interaction

| Command                                   | Description                     |
|:------------------------------------------|:--------------------------------|
| Click button                              | Toggle dropdown                 |
| Enter or Space when ``button`` is focused | Toggle dropdown                 |
| Arrow key when ``button`` is focus        | Open dropdown                   |
| Escape key when window is active          | Close all open elements on page |
| Click outside component                   | Close all open elements on page |
| Tab, DownArrow, RightArrow keys           | Navigate down with with keys    |
| Shift + Tab, UpArrow, RightArrow keys     | Navigate up with with keys      |


{% include parts/docs/popper.liquid %}