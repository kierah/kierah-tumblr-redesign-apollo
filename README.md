
# Tumblr Redesign
This project has three purposes.

1 Demonstrate the author's skills with React
2 Demonstrate the author's skills (acquired while writing this code) with GraphQL
3 Demo some minor UX enhancements to the tumblr website.

This is the backend for the Tumblr Redesign and provides an Apollo GraphQL service
with a MongoDB store.

Please see [Front End Documentation]() for more information about the project in general.


## Table of Contents
- [Choosing Implementation Details](#choosing-implementation-details)

## Choosing Implementation Details

### Apparent Flaws

Tumblr has a fairly complete and complex set of functionality. For this redesign project, I only needed to implement the aspects of the front end related to feed, blog and recommendations display. To these main goals, I added post creation to add GraphQL Mutations to my overall objective of learning GraphQL.

A keen eye will notice some things that appear to be flaws in the schema and overall code.

1 My schema makes nothing required, opening up the API to failures when a client queries incorrectly.
2 There are no actual tests. All testing was done with console.log, graphiql, and manual database inspection via MongoDB Compass.

Neither of these choices were accidents. This project is my first introduction to GraphQL and MongoDB, and since I learned by doing, I did not know what to expect from either until I had gotten it working.

It is my opinion that test driven development makes sense when it is possible for expectations to be clear from the start. Similarly, I chose to write my schema to minimize GraphQL complaining, so that I could play with it as I developed the front and backend in tandem. The schema changed a good deal over the course of development, and that is because I started without a solid notion of what the end schema would include.
