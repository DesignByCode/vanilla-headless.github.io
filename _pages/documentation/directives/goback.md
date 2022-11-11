---
layout: docs
title: Go-Back
permalink: /documentation/goback/
---

# Go-Back 
The ``headless-goback`` button directive allow to go-back to previous page using the navigator history api. 
This directive extends the ``headless-button`` directive.

<iframe class="w-full h-[300px] rounded-md" src="{{ "/iframes/goback.html" | relative_path }}"></iframe>

{% include parts/docs/import.liquid %}

## Basic example (no styling)
> Use additional HTML and CSS to make it unique.
<div class="not-prose" markdown="0">
{% highlight html linenos  %}
<button type="button" is="headless-goback">
    Go Back
</button>
{% endhighlight %}
</div>


## Styled with TailwindCSS
> The example require [TailwindCSS](https://tailwindcss.com/)

<div class="not-prose" markdown="0">
{% highlight html linenos  %}
<button is="headless-goback" type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="-ml-1 mr-3 h-5 w-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
    Previous Page
</button>
{% endhighlight %}
</div>

## Accessibility notes
The ``headless-goback`` inherit with ``headless-button`` directive interactions.
### Mouse interaction
Click the ``button`` to navigate to previous visited page.

### Keyboard interaction

| Command                            | Description                       |
|:-----------------------------------|:----------------------------------|
| Keydown for ``Space``, ``Enter``   | Navigate to previous visited page |



