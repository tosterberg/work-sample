## Notes on Work Sample

### Design considerations

This section is a set of design considerations that I had thought about during the implementation.

#### Language and framework

-   Language was chosen as Typescript to show the use of generics and interfaces in Node.js.  I prioritized using Node.js over other considerations even though I had little experience using Typescript for Node.js and instead only used Typescript in the Angular framework for frontend development.  I also disregarded Python because I felt that Python and its use of dictionaries might trivialize this as a work sample.

-   Testing was chosen to be Mocha and Chai, however this could be xUnit or other testing options.  I chose Mocha for familiarity.

#### User Interface

-   Creating a command line interface in Node is not something that I had previously done, but knew it would be possible and was excited to see how that would be implemented.  The result feels like there are going to be issues with the implementation.  A recursive call until exit listening on the stdio is normal, but I felt uncomfortable with the way that I put it in.

-   I chose to normalize the first `word` input in the command line as all uppercase to remove type sensitivity, although not specifically called out in the requirements.

-   I saw that all of the commands had a specific number of options that came with them and decided to make that a strict requirement, although this does change the outcome of one use case which we will discuss in our review.

#### MultiDict

-   Created a generic collections interface with some of the functions that I thought would be needed for this task.  My thinking is that in a more real life situation you would have some functionality that has other concrete implementations and you want to keep that to the interface, which is implemented by a concrete use of the collections.

-   The concrete implementation was a multi string dictionary.  This is probably the most straightforward implementation of a dictionary where the key is a string and the value is an array of strings.  The alteration would be that we add to the string array instead of complete replacement.

-   Option that I considered, and would be requirements dependent if this needed to scale and house a massive dictionary, would be to use a Hash Table for keys, so that finding a key would be O(ln(n)) rather than O(n).  It would have added 15-20 minutes to the implementation and complicated key matching to be a two step process and for small implementations added considerable overhead by needing to calculate hashes for all keys to be searched or inserted.

### Reflection to refactor

This section is a set of observations that I have made after looking at the code the next day, with better interpretations of the requirements.

#### Modularity / Removing Strong and Weak Associations where possible

-   I left this project approximately where I was at a few hours in, and with another hour or two would have worked on decoupling the way that my index.ts file depends on MultiDict for outputting to the screen.  What I would fix it too would be rewriting the main functions of MultiDict to return a JSON like `{ message: "Text", success: "true", data: {} }` where data would only be there for some requests, but the general external function calls would be looking for the message and the success properties.

#### If I were to start again from now

-   Program it in Java where cli is more direct, node.js required use of functionality that I was less familiar with `readline`.

-   Program it in Java where showing generics and interfaces are natively supported, for node.js I had to use Typescript and transpile.

-   Use the tools I thought I should use for the job from the beginning rather than using the language/framework that I was most recently working in, and more immediately comfortable with.  My thinking that since this position uses node.js I should use it for this work sample, and my hindsight is telling me I should have gone with my gut and done this in Java.
