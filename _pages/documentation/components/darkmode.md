---
layout: docs
title: Dark Mode
permalink: /documentation/darkmode/
---

# Dark Mode
The dark mode component will toggle between dark and light and save the result to localStorage.

<iframe class="w-full h-[400px] rounded-md" src="{{ "/iframes/darkmode.html" | absolute_url }}"></iframe>

{% include parts/docs/import.liquid %}

## Basic example (no styling)
> Use additional HTML and CSS to make it unique.
<div class="not-prose" markdown="0">
{% highlight html linenos  %}
<headless-darkmode>
  <button type="button">
    Text
  </button>
</headless-darkmode>
{% endhighlight %}
</div>

## Styled with TailwindCSS
> The example require [TailwindCSS](https://tailwindcss.com/)
<div class="not-prose" markdown="0">
{% highlight html linenos  %}
<headless-darkmode class="inline-flex">
  <button type="button" class="px-4 py-2 flex justify-center space-x-2 inline-block rounded-md dark:bg-white dark:text-gray-600  bg-gray-700 text-gray-100 shadow-md">
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <path fill="currentColor" d="M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z" />
    </svg>
    <span>Dark Mode</span>
  </button>
</headless-darkmode>
{% endhighlight %}
</div>


## Accessibility notes
### Focus management
Clicking the ``button`` to focus the ``button``. 

### Mouse interaction
Clicking the ``button`` to toggle state of component.

### Keyboard interaction

| Command                                   | Description      |
|:------------------------------------------|:-----------------|
| Click button                              | Toggle Darkmode  |
| Enter or Space when ``button`` is focused | Toggle Darkmode  |



