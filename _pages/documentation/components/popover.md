---
layout: docs
title: Popover
permalink: /documentation/popover/
---

# Popover
Popover component is perfect for showing and hide elements on pages. Works nice in navigation menus, hide figure 
captions and creating flyout menus.

<iframe class="w-full h-[400px] rounded-md" src="{{ "/iframes/popover.html" | absolute_url }}"></iframe>

{% include parts/docs/import.liquid %}

## Basic example (no styling)
> Use additional HTML and CSS to make it unique.
<div class="not-prose" markdown="0">
{% highlight html linenos  %}
<headless-popover>
    <button id="popover" type="button" aria-expanded="true" aria-haspopup="true">Popover</button>
    <div aria-labelledby="popover">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
</headless-popover>
{% endhighlight %}
</div>

## Styled with TailwindCSS
> The example require [TailwindCSS](https://tailwindcss.com/) 

<div class="not-prose" markdown="0">
{%- highlight html linenos  %}
<headless-popover class="relative" offset="0 10" placement="bottom-end bottom" popper>
  <button aria-expanded="true" aria-haspopup="true" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-sky-500" id="popover" type="button">
    Popover
    <!-- Heroicon name: solid/chevron-down -->
    <svg aria-hidden="true" class="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fill-rule="evenodd" />
    </svg>
  </button>
  <div aria-labelledby="popover" class="absolute z-10 w-screen max-w-sm  transform px-4 sm:px-0">
    <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
      <div class="relative grid gap-8 bg-white p-7">
        <a class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-50" href="#">
          <span>
            <svg aria-hidden="true" fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
              <rect fill="#e0f2fe" height="48" rx="8" width="48"></rect>
              <path d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z" stroke="#0ea5e9" stroke-width="2"></path>
              <path clip-rule="evenodd" d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z" fill-rule="evenodd" stroke="#0284c7" stroke-width="2"></path>
              <path clip-rule="evenodd" d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z" fill-rule="evenodd" stroke="#0284c7" stroke-width="2"></path>
            </svg>
          </span>
          <span class="ml-2"> Lorem ipsum dolor sit amet, consectetur. </span>
        </a>
        <a class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-50" href="#">          <span>
            <svg aria-hidden="true" fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
              <rect fill="#e0f2fe" height="48" rx="8" width="48"></rect>
              <path d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z" stroke="#0ea5e9" stroke-width="2"></path>
              <path clip-rule="evenodd" d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z" fill-rule="evenodd" stroke="#0284c7" stroke-width="2"></path>
              <path clip-rule="evenodd" d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z" fill-rule="evenodd" stroke="#0284c7" stroke-width="2"></path>
            </svg>
          </span>
          <span class="ml-2"> Lorem ipsum dolor sit amet, consectetur. </span>
        </a>
        <a class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-50" href="#">
          <span>
            <svg aria-hidden="true" fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
              <rect fill="#e0f2fe" height="48" rx="8" width="48"></rect>
              <path d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z" stroke="#0ea5e9" stroke-width="2"></path>
              <path clip-rule="evenodd" d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z" fill-rule="evenodd" stroke="#0284c7" stroke-width="2"></path>
              <path clip-rule="evenodd" d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z" fill-rule="evenodd" stroke="#0284c7" stroke-width="2"></path>
            </svg>
          </span>
          <span class="ml-2"> Lorem ipsum dolor sit amet, consectetur. </span>
        </a>
      </div>
    </div>
  </div>
</headless-popover>
{% endhighlight -%}
</div>



## Accessibility notes
### Focus management
Clicking on ```button``` set focus to it. Focus will be removed by pressing ```Escape``` key and clicking outside the target element.

### Mouse interaction
Clicking on ```button``` will toggle on state of target element. Clicking off the target element will close all 
dropdown components on page.

### Keyboard interaction

| Command                                   | Description                     |
|:------------------------------------------|:--------------------------------|
| Click button                              | Toggle dropdown                 |
| Enter or Space when ``button`` is focused | Toggle dropdown                 |
| Arrow key when ``button`` is focus        | Open dropdown                   |
| Escape key when window is active          | Close all open elements on page |
| Click outside component                   | Close all open elements on page |

