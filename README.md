# AngularToDoListApp

AngularToDoListApp is a web application that allows users to manage their tasks efficiently. Built with Angular 17 for the frontend and ASP.NET Core Web API for the backend, this application provides a seamless experience for creating, updating, and organizing to-do items.

## Motivation

The motivation behind AngularToDoListApp was to develop a practical and user-friendly task management tool. Leveraging the latest versions of Angular and ASP.NET Core, the goal was to create a robust application that helps users stay organized and productive.

## Features

- **Task Management**: Create, update, delete, and mark tasks as complete.
- **User Authentication**: Secure login and registration system.
- **Real-time Updates**: Immediate reflection of changes across different components using Angular services.

## LIVE DEMO

![home](https://your-demo-url.com)

Replace `https://your-demo-url.com` with the actual URL of your live demo or screenshot showcasing the AngularToDoListApp.

## Dependencies

### Technologies Used

- **Angular 17**: Frontend framework for building single-page applications
- **Angular Material**: UI component library for Angular applications
- **RxJS**: Reactive programming library for handling asynchronous data streams
- **HTML/CSS**: Markup and styling languages for web development
- **TypeScript**: Superset of JavaScript that adds optional static typing
- **ASP.NET Core Web API**: Backend framework for building RESTful services
- **Entity Framework Core**: ORM for database interactions
- **SQL Server**: Database for storing application data

## Setup

Follow these steps to set up AngularToDoListApp locally:

### Frontend Setup

1. **Clone the Repository**: 
    ```bash
    git clone <repository_url>
    cd angular-todo-list-app
    ```

2. **Install Dependencies**: 
    ```bash
    npm install
    ```

3. **Start the Development Server**: 
    ```bash
    ng serve
    ```

4. **Access the Application**: 
    Open your web browser and navigate to `http://localhost:4200/` to access the AngularToDoListApp.

### Backend Setup

1. **Clone the Repository**: 
    ```bash
    git clone <repository_url>
    cd aspnetcore-webapi
    ```

2. **Restore Dependencies**: 
    ```bash
    dotnet restore
    ```

3. **Update Database Connection String**: 
    Update the connection string in `appsettings.json` to point to your SQL Server instance.

4. **Apply Migrations**: 
    ```bash
    dotnet ef database update
    ```

5. **Run the Application**: 
    ```bash
    dotnet run
    ```

## Usage

- **Creating Tasks**: Add new tasks with titles and descriptions.
- **Updating Tasks**: Modify existing task details.
- **Deleting Tasks**: Remove tasks that are no longer needed.
- **Completing Tasks**: Mark tasks as complete to track progress.

## Contributing

Contributions to AngularToDoListApp are welcome! To contribute, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature`)
3. Make changes and commit them (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature`)
5. Create a new Pull Request

## License

This project is licensed under the [MIT License](LICENSE).

