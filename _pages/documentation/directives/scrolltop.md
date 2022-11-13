---
layout: docs
title: Scroll Top
permalink: /documentation/scrolltop/
---

# Scroll Top 
The ``headless-scrolltop`` button directive makes it super easy to add a scroll to top feature to your website. 
This directive extends the ``headless-button`` directive.

<iframe class="w-full h-[400px] rounded-md" src="{{ "/iframes/scrolltop.html" | absolute_url }}"></iframe>

{% include parts/docs/import.liquid %}

## Basic example (no styling)
> Use additional HTML and CSS to make it unique.
<div class="not-prose" markdown="0">
{% highlight html linenos  %}
<button type="button" is="headless-scrolltop">
    To Top
</button>
{% endhighlight %}
</div>


## Styled with TailwindCSS
> The example require [TailwindCSS](https://tailwindcss.com/)

<div class="not-prose" markdown="0">
{% highlight html linenos  %}
<button is="headless-scrolltop" class="fixed grid bg-gray-100 z-50 bottom-10 right-10 border border-gray-200 rounded-md h-10 w-10 justify-center items-center hover:bg-green-100 hover:text-green-900 hover:border-green-900 hover:shadow-md transition-all duration-100" type="button">
    <span class="sr-only">Scroll to top</span>
        <svg aria-hidden="true" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</button>
{% endhighlight %}
</div>

## Accessibility notes
The ``headless-scrolltop`` inherit with ``headless-button`` directive interactions.
### Mouse interaction
Click the ``button`` to scroll to top of page.

### Keyboard interaction

| Command                                              | Description           |
|:-----------------------------------------------------|:----------------------|
| Keydown for ``Space``, ``Enter`` and ``Ctrl + Home`` | Scroll to top of page |



