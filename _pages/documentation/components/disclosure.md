---
layout: docs
title: Disclosure (Accordion)
permalink: /documentation/disclosure/
---

# Disclosure (Accordion)

The disclosure  component is UI pattern for showing and hiding a single or a list of grouped elements. 
The is common used for FAQ sections on most websites.   

<iframe class="w-full h-[550px] rounded-md" src="{{ "/iframes/disclosure.html" | relative_path }}"></iframe>

{% include parts/docs/import.liquid %}

## Basic example (no styling)
> Use additional HTML and CSS to make it unique.
<div class="not-prose" markdown="0">
{% highlight html linenos  %}
<headless-disclosure>
  <button aria-controls="faq1_desc" aria-expanded="false" type="button">
    What do I do if I have a permit for an assigned lot, but can't find a space there?
  </button>
  <div id="faq1_desc">
    Park at the nearest available parking meter without paying the meter and call 999-999-9999 to report the
    problem. We will note and approve your alternate location and will
    investigate the cause of the shortage in your assigned facility.
  </div>
  <button aria-controls="faq2_desc" aria-expanded="false" type="button">
    What do I do if I lose my permit or if my permit is stolen?
  </button>
  <div id="faq2_desc">
    You should come to the Parking office and report the loss. There is a fee to replace your lost permit. However,
    if your permit was stolen, a copy of a police report needs
    to be submitted along with a stolen parking permit form for a fee replacement exemption.
  </div>
</headless-disclosure>
{% endhighlight %}
</div>


## Styled with TailwindCSS
> The example require [TailwindCSS](https://tailwindcss.com/)
<div class="not-prose" markdown="0">
{% highlight html linenos  %}
<headless-disclosure class="mx-auto w-full max-w-md rounded-md bg-white p-2">
  <dl class="faq">
    <dt>
      <button aria-controls="faq1_desc" aria-expanded="true" class="flex w-full rounded-md bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 mb-2" type="button">
        What do I do if I have a permit for an assigned lot, but can't find a space there?
      </button>
    </dt>
    <dd>
      <div class="px-4 pt-4 pb-2 text-sm text-gray-500" id="faq1_desc">
        Park at the nearest available parking meter without paying the meter and call 999-999-9999 to report the
        problem. We will note and approve your alternate location and will
        investigate the cause of the shortage in your assigned facility.
      </div>
    </dd>
    <dt>
      <button aria-controls="faq2_desc" aria-expanded="true" class="flex w-full rounded-md bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 mb-2" type="button">
        What do I do if I have a permit for an assigned lot, but can't find a space there?
      </button>
    </dt>
    <dd>
      <div class="px-4 pt-4 pb-2 text-sm text-gray-500" id="faq2_desc">
        Park at the nearest available parking meter without paying the meter and call 999-999-9999 to report the
        problem. We will note and approve your alternate location and will
        investigate the cause of the shortage in your assigned facility.
      </div>
    </dd>
    
  </dl>
</headless-disclosure>

{% endhighlight %}
</div>


## Accessibility notes
### Focus management
Clicking the ``button`` to add focus to the current element. 

### Mouse interaction
Clicking the ``button`` will toggle the targeted elements.

### Keyboard interaction

| Command                                   | Description                      |
|:------------------------------------------|:---------------------------------|
| Click button                              | Toggle disclosure                |
| Enter or Space when ``button`` is focused | Toggle disclosure                |
| Tab                                       | Navigate down with with keys     |
| Shift + Tab                               | Navigate up with with keys       |

