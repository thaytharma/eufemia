---
title: 'HTML Elements'
icon: 'elements'
order: 6
---

import CodeBlock from 'dnb-design-system-portal/src/shared/tags/CodeBlock'
import ComponentBox from 'dnb-design-system-portal/src/shared/tags/ComponentBox'
import { Link } from '@dnb/eufemia/src/elements'
import NotSupportedElements from 'Docs/uilib/elements/not-supported'
import UnstyledElements from 'Docs/uilib/elements/unstyled'
import Anchor from 'Docs/uilib/elements/anchor'
import Blockquote from 'Docs/uilib/elements/blockquote'
import Tables from 'Docs/uilib/elements/tables'
import Lists from 'Docs/uilib/elements/lists'
import Image from 'Docs/uilib/elements/image'
import Hr from 'Docs/uilib/elements/horizontal-rule'
import Code from 'Docs/uilib/elements/code'

# HTML Elements

The `@dnb/eufemia` contains styling for the most commonly used [HTML Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) defined by the UX team at DNB. You may also have a look at [Typography](/uilib/typography) for headings and paragraph usage.

## Overview

- [Anchor (Text Link)](#anchor-text-link)
- [Headings](/uilib/typography/heading)
- [Paragraph](/uilib/typography/paragraph)
- [Lists](#lists)
- [Tables](#tables)
- [Horizontal Rule](/uilib/elements#horizontal-rule)
- [Blockquote](#blockquote)
- [Image](#image)
- [Div/Span](#unstyled-html-elements)
- [Select](#missing-html-elements)
- [Code](#code)

### Vanilla HTML

In order to apply a style, you have to define a CSS class, like:

<CodeBlock reactLive hidePreview>
{`
<a href="/" className="dnb-anchor">Text Link</a>
<blockquote className="dnb-blockquote">
  Dis leo ala tractatos ei quo.
</blockquote>
`}
</CodeBlock>

### React JSX

For those using JSX with React, you can simply use the wrapper Components. They also inherit to the [Skeleton](/uilib/components/skeleton) provider.

```jsx
import { H1, H2, P, Anchor, Link } from '@dnb/eufemia/elements'

render(
  <article>
    <H1>Semantic h1</H1>
    <P>My Paragraph</P>
    <Anchor href="/">Link</Anchor>
    <Link href="/">Link</Link>
  </article>
)
```

#### Styled Components

They work seamlessly with Styled Components (emotion) as well:

<ComponentBox useRender scope={{Link}}>
{`
const StyledLink = styled(Link)\`
  color: var(--color-fire-red);
\`
render(<StyledLink href="/" target="_blank">Styled Link</StyledLink>)
`}
</ComponentBox>

<Anchor />
<Lists />
<Tables />
<Blockquote />
<Image />
<Hr />
<UnstyledElements />
<Code />

---

<NotSupportedElements />
