---
type: ProjectLayout
title: 'Design Ops from Zero: Building a Scalable System at Prism'
date: '2021-01-01'
client: Prism.fm
description: >-
  Learn how I helped Prism, an early-stage music fintech startup, kickstart its
  design ops and design language system for exponential year-over-year growth.
bottomSections: []
metaTags: []
colors: colors-b
---
#### Prism is an event booking platform for talent buyers and promoters.

As an early-stage startup, the company hadn’t yet developed a cohesive design system or implemented processes for the creation, documentation, and use of design patterns and principles.

No standardized processes or documentation meant a lack of consistency in design patterns and front-end frameworks. It also meant no source of truth or historical record for how those decisions were made. Additionally, despite being a relatively young startup, its software was loaded with features and complex functionality for many user types and roles, amplifying the need for these design ops improvements.

As the company’s first designer, solving this was one of my earliest responsibilities. I collaborated with Prism’s product leadership and dev teams to lay the groundwork for a design system capable of meeting the needs of users and team members, as well as new processes and workflows based on current best practices for product teams.

#### Here’s what that process looked like:

*   Interview stakeholders to identify pain points and opportunities

*   Conduct design audit of current experience

*   Create (and maintain) new design language system

*   Introduce new processes and documentation based on opportunities and best practices

![](/images/prism-events-before.png)<sub>**BEFORE:**</sub><sub> Legacy events list in Prism. This page also doubled as a pseudo-dashboard meant to provide an overview of show performance information, although the information provided was not always intuitive. This came with the tradeoff of being unable to quickly find and navigate to an event.</sub>

![](/images/prism-events-list-after.png)<sub>**AFTER:**</sub><sub> Redesigned events list using the new design language system. Users can more quickly parse the list for important information, and can also expand a specific event list card to see show performance information at a glance.</sub>

#### Getting Started

To kick off the project, I spoke to product leadership, developers, and customer success reps to build domain knowledge and an understanding of existing needs and pain points. We identified many opportunities common to an early-stage startup without a formal design team. For example, the culture was very developer-focused, meaning that users weren’t always front and center when framing problems and, as a result, building solutions. There was also a lack of standardized processes or documentation for UX or UI decisions.

#### Design Audit

Despite being a relatively young product, the app was loaded with features and complex functionality. The app served many types of users and organizations, with a wide range of roles permissions ranging from talent buyers and venues to promoters and agents. Its uses include keeping detailed and surprisingly complex financial records and reports, generating legal contracts between talent buyers and sellers, viewing/editing complex event calendars, as well as managing potentially hundreds of artists, events, and tours at time.

As you might expect, a preliminary design audit revealed a lack of consistency across the product. I documented existing color and component styles, UI copy, and page layouts, identifying inconsistencies and proposing consolidation opportunities where appropriate.

![](/images/prism-audit-buttons.png)<sub>Audit of inconsistent button styles found across the Prism app.</sub>

For example, there were almost a dozen button styles being used for primary buttons or actions, with inconsistent colors, depth, borders, shape, and text styles.

Consolidating common components like these could help pay down an abundance of UX and technical debt, but more importantly, these types of inconsistent visual elements led to busy, cluttered pages that often contributed to increased cognitive load for users. This sometimes made relatively simple tasks seem more confusing than they actually were.

![](/images/prism-event-detail-before.png)<sub>**BEFORE:**</sub><sub> Legacy event page in Prism shows a cluttered, inconsistent design with an unclear visual hierarchy.</sub>

![](/images/prism-event-detail-page-after.png)<sub>**AFTER:**</sub><sub> Redesigned Prism event page using the new design language system and a number of UX enhancements.</sub>

#### Design Strategy and Direction

By this point, we discovered the need for better, consistent documentation as well as a need for a simpler, more consistent UI. We also discovered an opportunity to make life easier on the developers by using Material Design as a starting point for the new design system.

From that, I came away with these goals:

1.  Introduce the Atomic Design framework for documenting front-end components and design patterns.

2.  Adopt “complexion reduction” as a driving principle in order to simplify the UI and reduce visual clutter.

3.  Leverage Material Design components and design principles whenever appropriate.

It should be noted that this wasn’t a one-time, wholesale redesign. Most of this work happened over the course of several product updates using these new components and layouts. In practice, this meant that the updated design language was still influenced by the legacy product, with new elements and components being updated each sprint cycle.

The sequencing of these updates factored into the overall design direction as well as individual design choices. The new look and feel still needed to fit the rest of the app, which was another reason to lean on a lighter UI with minimalist elements.

#### Atomic Design

I wanted to use Brad Frost’s Atomic Design framework as a starting point to get everyone thinking about modular, component-based design, and how reusing a smaller number of visual patterns and its related code could lead to better outcomes for both users and team members. At the time, this was the best mental model for the transformation we had in mind. Instead of a dozen bespoke buttons, now we’d only use three (primary, secondary, tertiary) with various states (enabled, disabled, etc.), and by rule those would only use existing style elements. It may be standard now, but much of this was still an emerging best practice when I joined the team.

![](/images/atomic%20design%20\(1\).png)<sub>Anatomy of a date picker. For context, talent buyers such as music venues are often juggling multiple prospective events on the same day, making it important to see which dates already have confirmed events at a glance.</sub>

#### Complexion Reduction

By the mid-2010s, there was an industry-viral design trend of [complexion reduction](https://medium.com/slate-teams/complexion-reduction-a-new-trend-in-mobile-design-cef033a0b978), characterized by the extraction of unnecessary color, simplified visual elements and cues, and a more prominent visual hierarchy of text elements.

These experiences don’t just make it easier to discern information hierarchy. They’re better for accessibility, too. And that’s before you get into the aesthetics side of it, which is plenty debatable, but that’s what critique sessions are for.

Given the scope of the product and the overall density of information on many of its pages, one of my guiding principles for this redesign was to get the interface out of the way so that users could focus on what is important to them.

![](/images/prism%20reports%20before.gif)<sub>**BEFORE:**</sub><sub> Legacy reports dashboard.</sub>

![](/images/prism-reports-after\(1\).png)<sub>**AFTER:**</sub><sub> Redesigned reports dashboard using the new design language.</sub>

#### Material Design

I learned from conversations with Prism’s CTO that developers were mostly using Material Angular components to build the product, so it made sense to leverage Material styles as much as possible when designing the new system. Not only would this help keep down scope by avoiding unnecessary customization, it also came with the added benefit of Google’s robust documentation and component libraries.

![](/images/route%20sheet.png)<sub>An MVP concept for tour management, demonstrating that Material Design doesn’t have to be totally boring.</sub>

#### Outcome

We were able to establish greater clarity and consistency throughout the app, as well as shortening the development time for product cycles and reducing the guesswork inherent in translating design comps to functional software. The result was a much improved product whose users would routinely reach out to give positive feedback after a new design rollout, marking a huge win for users, team members, and business leadership.

Ultimately, these product and process improvements helped the company weather an industry-threatening pandemic, generating $1.3 million in total revenue (a 115% increase over year) all the way to a successful [$8 million Series A funding round](https://prism.fm/blog/product-updates-news/prism-announces-8-million-series-a-funding/) in 2021.

![](/images/figma-user-feedback\(1\).png)<sub>Some of the customer feedback we received during my time at Prism. Evan was our client success rep, btw.</sub>

> “Jesse approaches his work with more thoughtfulness than most. He greatly improved our entire company culture by asking tough questions and putting the customer at the center of everything he did. In just a few short months after joining the team, we released a more intuitive, beautiful product than we ever imagined possible.”
>
> **—**
>
> [**Kate Hrdina**](https://www.linkedin.com/in/katehrdina/)**, Product Manager, Prism**

