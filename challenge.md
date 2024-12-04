# Typescript & React Coding Challenge: Excel File Viewer

This challenge has three parts: _mandatory_, _optional_, and _bonus_. The _mandatory_ part is required for all applicants; the _optional_ part is required if you are aiming for a senior position. The _bonus_ part is part of the challenge in case you want to show off your skills or maybe have some code sitting around that you can reuse.

## How to do this

Please review the instructions below carefully and follow them to the best of your ability. If you have any questions, please reach out to us. Once you are done, please send us a link to your **private** repository and invite us to it; you can also send us a zip file if you prefer, but please include the `.git` folder so we can see your commit history.

## The challenge

### Mandatory Part

**Please complete this part for all positions, junior and senior.**

Your task is to create a React application using TypeScript that meets the following requirements:

1. **File Upload**: Allow a user to upload an Excel file. Please use [this file](https://github.com/dtq-one/bank-additional-full.xlsx/raw/main/bank-additional-full.xlsx). (**10 points**)
2. **Display Data**: Once the file has been uploaded, display the Excel file's contents in a table/grid format. (**10 points**)
3. **Sorting and Filtering**: Users should be able to sort and filter the displayed data. (**10 points**)
4. **Build Pipeline**:
    - Set up a build process using tools of your choice (e.g., Webpack, Parcel, etc.). (**5 points**)
    - Ensure your application is properly linted using TSLint or ESLint with TypeScript configurations. (**5 points**)
    - Write unit tests for your application using a testing library/framework of your choice (e.g., Jest, Mocha, etc.). (**15 points**)
5. Include a `README.md` with:
    - Instructions on how to run the application. (**10 points**)
    - A brief explanation of the design choices you've made and the libraries/frameworks you've chosen. (**10 points**)

**Notes**

- While you are free to use any open-source libraries, prefer those without commercial options.
- You can use those ([https://jspreadsheets.com/](https://jspreadsheets.com/)) as a reference for spreadsheet-related libraries. However, you are not 
  limited to them and can research other options if desired.
- You can use any front-end library (Tailwind, Bootstrap, your choice) you like.
- Feel free to use nest.js or similar for the backend, but it is not required.

**Bonus Points**

- Address some typical TypeScript gotchas in your solution and, if you can, leave comments on why/how you tackled them. (**10 points**)
- Nice UI/UX:
  - Apply some styling to the application to make it look nice. (**5 points**)
  - Implement responsive design so the application looks decent on mobile devices. (**5 points**)
  - Enhance the user experience with meaningful animations or transitions. (**5 points**)

### Optional Part

**Please complete this part if you are aiming for a senior role.**

In addition to above requirements, please implement the following:

1. **Pagination**: Users should be able to paginate through the data. (**5 points**)
2. **Persistence**: The application should save the uploaded file and its contents to a database of your choice (e.g., MongoDB, PostgreSQL, etc.). (**15 points**)
3. **Changing data**: Users should be able to change data in a cell and save it to the database. (**10 points**)
4. **Authentication**: User should be able to authenticate to the application and only see their own data. (**10 points**)
5. **E2E**: Use a testing framework of your choice to write one or two end-to-end tests (launching webdriver or similar, does not have to be headless) for your application. (**15 points**)
6. **Extra**: Implement a feature of your choice that you think would be a good addition to the application. (**10 points**)

### Bonus Part

**This part is completely optional. We just wanted to give you some place to demonstrate extra skills and previous experience you might have with Cloud-native.**

Since all our code runs in containers, we would like to see how you would containerize your application. Please create a `Dockerfile` and a `docker-compose.yml` file that allows us to run your application in a container.

1. **Dockerfile**: Create a Dockerfile that builds your application and runs it in a container. (**5 points**)
2. **docker-compose.yml**: Create a `docker-compose.yml` file that allows us to run your application in a container. (**5 points**)
3. **Readiness/Healthcheck**: Add a readiness and healthcheck endpoint to your application and configure accordingly in Dockerfile. (**15 points**)
4. **Best Practices**: Follow best practices for Dockerfiles (build cache, multi-stage builds, etc.; non-root user, etc.). (**10 points**)
5. **Kubernetes**: Create Kubernetes manifests that can deploy your application to a Kubernetes cluster; it should include deployments, services, and perhaps an ingress. (**10 points**)

## Wrap-up and next steps

### Evaluation Criteria

We'll be evaluating your solution based on the following:

- Code Quality: Structure, readability, and best practices.
- TypeScript proficiency: Usage of types, interfaces, generics, and other TypeScript features.
- React proficiency: Component structure, state management, and component interactions.
- Overall UX and UI: Ease of use, design, and user flow.
- Problem-solving skills and creativity.
- Build pipeline setup, linting, and testing.
- Completeness, i.e. how many of the requirements you were able to implement and how well did you follow (e.g. proper README, clean git commit history, unit/integration tests, etc.)

## Time Frame

We believe in respecting your time, so we anticipate this task might take an afternoon. However, the quality is more important than speed. If you need a bit more time, that’s fine. Just keep us posted on your progress.

## Additional Considerations

❗ please avoid using ChatGPT for this challenge; it is fine to solve individual parts using ChatGPT or other LLMs, but it is not helpful to let ChatGPT do the entire coding task as it is our goal to assess your actual skills.

## Next steps

Within at most one week, we will review your solution according to the evaluation criteria above and get back to you with feedback. If we like what we see, we will invite you to a live interview where you can walk us through your solution, and we can ask you some questions about it. We will also ask you to add some more functionality during this live meeting and ask you to explain your thinking when doing the tasks.

Thanks again for apply at DATATRONiQ and taking the time. We look forward to your solution!

