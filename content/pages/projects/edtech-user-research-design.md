---
type: ProjectLayout
title: Edtech User Research & Design
date: '2019-02-01'
client: Blackboard
description: >-
  Learn how I led a market-differentiating UX research and design project for
  Blackboard, an enterprise education technology company.
bottomSections: []
metaTags: []
colors: colors-b
---
#### [Learn Ultra](https://www.anthology.com/learn-ultra) is the most recent version of Blackboard’s learning management system (LMS).

It offers a cleaner, more modern experience than Learn Original, but has fewer capabilities than its predecessor. Although the bulk of the product roadmap for Learn Ultra at this time was in support of gaining feature-parity with Original, my team was tasked with generating concepts for unique capabilities that could serve as market differentiators for Ultra.

Knowing that instructors frequently, if not exclusively, create assessments offline (or at least outside of the LMS), I sketched out a concept based on this statement:

> How might we allow eliminate the need for manual content and data entry into the Blackboard assessment canvas so that instructors can build online assessments easier and more quickly?

We had a pretty good idea that instructors wanted the ability to import test content from Word documents or other rich-text file formats. This concept and others were posted to the [Blackboard Community forum](https://community.anthology.com/home), made up of existing Blackboard users, product managers, and other internal and external stakeholders. Members voted on their top choices, with the ability to import assessments from documents being the clear favorite.

![](/images/blackboard-concept-sketches.png)<sub>Group sketches of early concepts</sub>

Having been given the green light from users, I worked with Product Management, User Research, and Development teams to validate and execute this concept. The UXR team at Blackboard during this time consisted of one user researcher, and she was on maternity leave. Fortunately, she was still a fantastic resource even during her time away from the organization — shout out to [Bethany Stolle](https://www.linkedin.com/in/bethanystolle/) for being amazing no matter what.

The end result was a proof-of-concept for a market-differentiating capability that allowed users to import .docx files as automatically gradable assessments in Blackboard Learn Ultra.

![](/images/blackboard-hifi.png)<sub>Drag and drop import of a Word document into Learn Ultra as a gradable assessment.</sub>

#### I’m not a hat person, but I did wear these for a while:

*   Ideate and refine initial concept to validate with users.

*   Create research plan, recruit and schedule participants, and craft facilitation guide for multiple rounds of user research.

*   Conduct contextual inquiries, interviews, and concept evaluation sessions.

*   Synthesize research and build research reports to distribute findings with the greater team.

*   Create lo-fi wireframes, mockups, and functional specs for new solution, including formatting guidelines and error-correction workflows.

*   Collaborate with Product Management and Development teams to build a working proof of concept.

#### Process

##### Generate conceptual sketches and share with existing users

Based on customer feedback from the Blackboard community, there was a clear need for users to import assessments directly from text documents, so we iterated on those initial sketches and started crafting a research plan.

##### Conduct generative user research and concept evaluation

Two sprints of remote research allowed us to better understand how instructors typically create assessments and how those assessments are brought into the LMS. We conducted a round of contextual inquiries plus an additional round of non-observational interviews and concept evaluation.

##### Create wireframes, users flows, and functional specs

I created lo- and hi-fi wireframes for the primary flows as well as functional specifications for error remediation — for example, what types of errors will instructors most likely encounter when importing these custom documents, and what are the best means to resolve them? I also identified and wrote formatting guidelines for various question and content types — more on that later.

#### Research and Synthesis

We conducted 11 sessions with university professors and instructional designers and set up a Mural board to capture our research synthesis after each session, and also coded our data and insights into our internal research database.

![](/images/blackboard-research-interview.png)<sub>Remote research session where a participant guided us through an assessment import workflow using a third-party tool</sub>

We were able to validate our hypothesis that instructors frequently create assessments outside of the LMS or acquire third-party content from publishers as tests or question banks. We found that this content is often imported using third-party tools rather than rebuilding the content manually in the LMS, adding additional cost and their own learning curve.

Users would like to natively import assessments into the LMS instead of using a third-party tool to avoid the bottlenecks that occur when licenses are distributed to a handful of gatekeepers with sole access to the software, particularly at the beginning of each semester when courses are being built in the LMS and stress levels are highest. It was clear that these third-party tools are not a particularly scalable solution, with formatting guidelines and conversion errors being the biggest usability pain points.

![](/images/blackboard-mural-template.png)<sub>Mural board for concept evaluation synthesis</sub>

#### Designing for User and System Errors

After sharing this research with the team and relevant stakeholders, I began refining user flows and wireframes. The import process needed to be as simple as possible, so we added the option to upload a Word document directly to the Learn Ultra assessment canvas. This is the workspace where users build assessments by adding question and answer content for various question types — multiple choice, essay, fill in the blank, or mathematical calculations, for example — as well as configuring test settings and assigning due dates.

This degree of complexity required well-defined formatting guidelines for these various data points. Open source formatting standards for assessments exist in the edtech community, but they are cumbersome and largely outdated, requiring users to tediously memorize dozens of formatting rules within a comma-delimited format.

This would have been a great opportunity to use machine learning for natural language processing, but that wasn’t an option for this iteration, so users would need to format these documents in such a way that the system could easily recognize all the different data points. This meant being able to render nearly a dozen different questions types, distinguish between questions and answer content, denote correct answers, recognize the expected order of the content, and more. Sounds easy in the age of ChatGPT, but that wasn’t the case half a decade ago.

From our research, we knew that the industry-standard tool for importing outside assessments had its own formatting guidelines that many third-party education content publishers already used for things like question banks and supplemental assessment content. With the goal of eventually supporting multiple formatting standards, we decided to leverage these guidelines for our proof of concept and provided a downloadable template for users unfamiliar with them.

![](/images/blackboard-respondus.png)<sub>This was the industry-leading tool for importing assessment in 2018. According to legend, this software has been tenured since Windows 98.</sub>

What happens when a question is misidentified? What happens if a user forgets to number a question or forgets to denote a correct answer in a multiple choice question? Errors are sure to happen, so we had to make sure that we anticipated the common error types and came up with an easy, intuitive way to resolve them once an assessment has been uploaded.

![](/images/blackboard-wireframe-1.png)<sub>Lo-fi wireframe of the workflow for reviewing and correcting potential import errors after an instructor uploads a .doc or .docx file to the Learn Ultra assessment canvas, inspired by the commenting and annotation features found in collaborative authoring tools like Invision or Figma. Here we see the first step of this flow once an assessment has been imported into the LMS.</sub>

We identified the different formatting errors that came up in our research, plus others that we believed were likely to occur. I bucketed these into categories based on severity for instructors to review after uploading:

**High Priority**

Question types or formatting were not properly recognized. These items will appear as text blocks and may not preserve their original formatting. This could simply be the result of accidentally typing the wrong character or putting it in the wrong place, but the end result is that the system can’t tell where one question or answer ends and the other begins. Not great.

**Medium Priority**

Question types were properly recognized, but correct answers may not have been properly denoted. Styling and visual formatting may not have been successfully preserved. This means there may have been ambiguity in multiple choice answers, or that text formatting may have been lost during the import process.

**Low Priority**

Question types were properly recognized and correct answers were properly denoted, but styling and visual formatting may not have been successfully preserved. This typically just meant that some type of rich-text formatting wasn’t properly converted, like a single bolded word for example. Not a deal breaker, but who’s to say that a particular text styling wasn’t important enough to preserve in machine-readable format?

Instructors and faculty could then drill down to specific errors within those categories and resolve each one individually. This workflow was largely inspired by collaborative design tools like Invision or Figma. Users also had the ability to edit the original document offline and upload again in the event of some sort of catastrophic failure. Anyone who’s ever tried to do something like import their work history from LinkedIn to a job application platform can probably understand this one.

![](/images/blackboard-wireframe-2.png)<sub>Clicking the “View and resolve” link opens an Import Details panel that lets the user granularly view all “items” imported from the document (i.e., questions, answer choices, etc.) Users could then drill down to resolve any issues with the newly imported assessment content.</sub>

![](/images/blackboard-wireframe-3.png)<sub>Inline, numbered annotations allow instructors to easily identify and address any potential concerns or errors with an individual assessment item.</sub>

![](/images/blackboard-wireframe-4.png)<sub>Users could then load the edit state of an individual question, save any necessary changes, and mark the item as resolved. In this example, a missing space between the question number and text caused two separate exam items to become merged as one — a common error we uncovered in our research.</sub>

#### Outcome

A proof of concept went into development in 2019. Shortly after, I left Blackboard to become for [Prism, an Austin-based fintech startup for live events](https://www.notion.so/Design-System-Creation-Implementation-d91e437c64114e4892fdc9028b7066e8?pvs=21). Overall, this project gave me the chance to take the lead on user research and creative problem-solving to translate user needs into market-differentiating product capabilities.

![](/images/blackboard-load-state.png)<sub>Assessment import load state. For the most part, this wasn’t a UI-heavy project, but it underscores the important work that happens behind the scenes before pixels start getting pushed around. </sub>[<sub>Abraham Lincoln sharpened his axe</sub>](https://www.goodreads.com/quotes/83633-give-me-six-hours-to-chop-down-a-tree-and)<sub>. We use sticky notes.</sub>

> “We wanted to meet a seemingly simple client need, but it became more complex as technical and architectural discussions progressed. Jesse’s thorough, well-structured research uncovered opportunities to simplify the project and got us back on track toward delivering this impactful feature for our users.”
>
> **—** [**Brad Evans**](https://www.linkedin.com/in/bradeevans/)**, Senior Product Manager, Blackboard**

