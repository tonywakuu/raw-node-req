Provide a detailed description of the full stack that you would choose to build this API, complete with descriptive strategies for the following:

- Hosting - AWS EC2/Lambda
- Language - Node.js
- Framework (if applicable) Raw Node.js 
- Storage - S3
- Performance - Jenkins
- Misc (anything not covered above)

Also, provide estimates on the scalability and monthly costs of this environment.

The plan was to create a microserviced backend that would host each airport indepentdently, whilst sharing their information securly across their information lanes. I would be hosted on some linux server, utilizing the Raw Node.js Http Engine. I could be deployed on a Cloudwatch, or EC2 instance, and will utlize S3, with Redis Steams as a Platform Database for real-time interactions and responses. For all of the heavy lifting, CI/CD, Scaling AZ's in-out, Performance Metrics, Testing, etc, I will use Jenkins, as this provides an all-in-one solution with the Master/Slave scalability.

I tried to complete the hardest one as much as possible tonight, in hopes that I would finish; I am probably about an or so away still yet. Everything went well to plan, from here, all I need to do is push the values that match the requested IDs into an array in order to access their Latitude and Longitude. From there, I would calulate how many miles the trip was, and implement an algorithm for optimized travel time <500 miles at a time.

Scaling will be simple, since all containers should follow the same Design Pattern. If you a Graphql fronend-point you're only making one call at a time, and retrieving all of the neccessary data in return. The Redis-Docker configuration provides and blazing fast, open-source way to keep track of big data in real-time. Definetly an essential choice for a system such as this.

I only did the final question becuase I knew I wouldn't have a lot of time. Pleaase do look over my code and let me know what you think!

## Function located in coordis.js change values in server.js(12) fuelCycle Function.