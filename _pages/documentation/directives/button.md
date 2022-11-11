---
layout: docs
title: Button
permalink: /documentation/button/
---

# Button
The button component acts just like a normal button, but with the added feature by adding ``aria-pressed`` on mouse 
and keyboard events.

<iframe class="w-full h-[250px] rounded-md" src="{{ "/iframes/button.html" | relative_path }}"></iframe>

{% include parts/docs/import.liquid %}

## Basic example (no styling)
> Use additional HTML and CSS to make it unique.

<div class="not-prose" markdown="0">
{% highlight html linenos  %}
<button type="button" is="headless-button">
    Button
</button>
{% endhighlight %}
</div>


## Styled with TailwindCSS
> The example require [TailwindCSS](https://tailwindcss.com/) and [tailwindcss-headless-attributes](https://www.npmjs.com/package/tailwindcss-headless-attributes)

<div class="not-prose" markdown="0">
{% highlight html linenos  %}
<button is="headless-button" type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
    Button text
</button>
{% endhighlight %}
</div>

## Styling toggle state with css (without tailwindcss-headless-attributes)
<div class="not-prose" markdown="0">
{% highlight css linenos  %}
[aria-pressed="true"]  {
    background: indigo;
}
{% endhighlight %}
</div>


## Accessibility notes

### Mouse interaction
Clicking the ``button`` to toggle ``aria-pressed`` state on mouse up and mouse down.

### Keyboard interaction

| Command               | Description                    |
|:----------------------|:-------------------------------|
| Key down ``button``   | Set ``aria-pressed="true"``    |
| Key up ``button``     | Set ``aria-pressed="false"``   |



