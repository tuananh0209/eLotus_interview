# Backend Test

- Total time: 10 hours (please no more!)

## Data Structure and Algorithms

> Time: 2 hours

1. [Gray Code](/code-challenges/gray-code.md)

2. [Sum of Distances in Tree](/code-challenges/sum-of-distances-in-tree.md)

3. [Maximum Length of Repeated Subarray](/code-challenges/maximum-length-of-repeated-subarray.md)

## Practice

> Time: 8 hours

1. Write a simple HTTP server and handler that serves a HTML form
   with 2 fields:

   - A hidden input field named "auth" that has receives its input value passed
     from the server code. This token should be passed as an environment variable to
     the application.

   - A file upload field named "data" (ie, `<input type="file"/>`) that uploads
     a file that the user selects (please do not waste time trying to make the
     HTML form pretty -- we don't need HTML developers, we need Backend
     developers)

2. The form above should POST data to the `/upload` handler, which should write
   the received file data to a temporary file in /tmp.

3. Before accepting any data, you should check that the content type of the
   uploaded file is an image, and that the auth token matches. If the
   submission is bad, please return a 403 HTTP error code. Images larger than 8
   megabytes should also be rejected.

4. Write the image metadata (content type, size, etc) to a database of your
   choice, including all relevant HTTP information.

5. Do a short 1 or 2 paragraph write up with information on building/running
   the application if relevant / necessary or non-standard.

## Notes

- You can use Java, Nodejs or Go.

- Feel free to use any open source packages that you want -- we’re not looking
  for developers to constantly reinvent the wheel, but for developers who are
  able to make use of existing packages. This is a skills based assessment,
  not an attempt to assess whether or not you can write a form upload
  library.

- It is not a problem if you are not able to complete all of the above in a
  limited time. Part of this assessment is to determine what progress you are
  able to make in that timeframe.

- When you are done, please commit all work to a Git repository, public your repository, and send us
  the git repository URL. Please **do not make the
  solution public**.

- Bonus points:

  - Use Go.
  - Properly comment your code and the use of environment variables or flags
    where possible.
  - Properly write a readme on how to get your code up and run.
  - Use as few Open Source libs as possible. That shows how strong you are at
    your choosen language.

- If you make it to the next round, we will talk about this project, and you
  will be expected to explain your design, decisions,... So, after submit the
  code, take some time to think about what can be asked.

# Information
Full name: Huynh Tuan Anh
Phone: 0922855506
Email: huynhtuananh0209@gmail.com
Outlook: anh.huynh0209@outlook.com