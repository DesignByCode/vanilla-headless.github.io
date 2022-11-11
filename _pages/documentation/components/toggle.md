---
layout: docs
title: Switch (Toggle)
permalink: /documentation/toggle/
---

# Switch (Toggle)
Switches are custom element that allow you to toggle between two states using mouse and keyboard event. By default, 
the component only do two things. First it will change attribute ``aria-checked`` of ``button`` and secondly it will 
add a data attribute of ``data-switch`` to root of component. This data attribute can be additional add to any 
element within the component. 

<iframe class="w-full h-[380px] rounded-md" src="{{ "/iframes/toggle.html" | relative_path }}"></iframe>

{% include parts/docs/import.liquid %}

## Basic example (no styling)
> Use additional HTML and CSS to make it unique.

<div class="not-prose" markdown="0">
{% highlight html linenos  %}
<headless-toggle>
    <button type="button" aria-checked="true">
        toggle
    </button>
</headless-toggle>
{% endhighlight %}
</div>


## Styled with TailwindCSS
> The example require [TailwindCSS](https://tailwindcss.com/) and [tailwindcss-headless-attributes](https://www.npmjs.com/package/tailwindcss-headless-attributes)

<div class="not-prose" markdown="0">
{% highlight html linenos  %}
<headless-toggle class="flex items-center group">
    <button aria-checked="true" class="group-data-switch-on:bg-blue-500 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2  border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="button">
        <span class="sr-only">Use setting</span>
        <span aria-hidden="true" class="group-data-switch-on:translate-x-5 translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-50" data-switch></span>
    </button>
</headless-toggle>
{% endhighlight %}
</div>

## Styling toggle state with css (without tailwindcss-headless-attributes)
<div class="not-prose" markdown="0">
{% highlight css linenos  %}
headless-toggle[data-switch="on"] button[aria-checked] {
    background: indigo;
}

headless-toggle[data-switch="on"] span[aria-hidden="true"] {
transform: translateX(20px);
}
{% endhighlight %}
</div>


## Accessibility notes
### Focus management
Clicking the ``button`` to focus on switch or use ``tab`` key to focus in and out using native keyboard events.

### Mouse interaction
Clicking the ``button`` to toggle selected switch.

### Keyboard interaction


| Command                                   | Description         |
|:------------------------------------------|:--------------------|
| Click button                              | Toggle switch       |
| Enter or Space when ``button`` is focused | Toggle switch       |
| Tab                                       | Focus in and out    |
| Shift + Tab                               | Focus in and out    |


