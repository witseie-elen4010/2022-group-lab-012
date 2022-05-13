# Coding review guide
*Reference: https://google.github.io/eng-practices/review/reviewer/looking-for.html
*Reference: https://google.github.io/eng-practices/review/reviewer/standard.html

## Introduction

The coding review guidelines are provided in this file.
The purpose of the code review is to ensure that the health of the overall code base is improving over time. In a code review there are two parties involved., the reviewer and the developer. It is important for the developers to complete their improved tasks, and the reviewer is responsible for making sure that the overall code health does not decrease and it stays consistant and maintainable.

---

The following aspects are evaluated when reviewing the  quality og the what project:

## Design
* The code must have an overall good design. The interactions of various pieces of the code must make sense.  
  it be considered if changes in the project belong to the codebase or the library, if it intergrates well with the system, or if it is a good time to add a specific functionality.

## Functionality
* The code does what the developer intended. 
* The developer's intention are good for the users of the code.
* The code does not have any concurrency problems.
* All UI changes look good and are realistic.
* Any parallel programming applied is synchronized safely.

## Complexity
* The code is not more complex than it should be. 
* Check individual lines for over complexity. 
* Check functions and classes for over complexity.
* Check added functionality only serves the current needs of the system.

## Tests
* The code has appropriate unit tests.
* The tests for the code are correct, sensible, and useful
* The testing is maintained.
* Tests do not test themselves
* The tests do not require client input.

## Naming
* The developer must pick good names for everything.
* The developer must use the appropriate coding style guides for naming conventions.
* A good name is long enough to fully communicate what the item is or does, without being so long that it becomes hard to read.

## Comments
* The comments must be clear and understandable
* All the comments must be necessary
* Comments must explain why instead of what.

## Style
* The code follows to the coding style guides provided.

## Documentation
* Code is documented appropriately.
* including READMEs

---

The conducts expected from the reviewer and developer during a code review:

## Mentoring
* The Reviewer can leave comments that help a developer learn something new.if the comment must purely be for purely educational, but not critical to meeting the standards described in this document, prefix it with “Nit: “ or otherwise indicate that it’s not mandatory for the author to resolve it.
* (Developer) checks comments and answers with the actions they are going to take. Must update the reviewer om changes.


## Principle
* Technical facts and data overrule opinions and personal preferences.
* With regards to the coding style, the coding style guide is the absolute authority. The style should be consistent with what is there.
* If the author can demonstrate that several approaches are equally valid, then the reviewer should accept the preference of the author. Otherwise the choice is dictated by standard principles of software design.
* If no other rules apply, the reviewer can ask the author to maintain consistency with  the current code base as long as it does not degrade the overall code health.

## Conflict resolution
* Whenever there is a code review conflict, the first step is for developers and reviewers to try to reach consensus based on the content of this document and the other documents provided.
* If consensus is difficult to reach, meet face-to-face or have  a video conference between the reviewer and the author. (This requires evidence of subsequent discussion)
* If a situation still remains unresolved, the most common way to resolve it is to escalate it.
