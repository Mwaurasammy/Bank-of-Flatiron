# Bank Transactions App

A simple React application for managing and displaying recent bank transactions. The app allows users to add new transactions, filter them by description, and view them in a list.

## Features

- Display a list of recent bank transactions.
- Add new transactions through a form.
- Filter transactions using a search bar.

## Technologies Used

- React
- JSON Server (for local data storage)
- CSS

## Project Setup

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up the local server:**

    Create a `db.json` file in the root directory of the project with the following data:

    ```json
    {
      "transactions": [
        // Your transactions data
      ]
    }
    ```

    Start the JSON server:

    ```bash
    npx json-server --watch db.json
    ```

    The server will run at [http://localhost:8001/transactions](http://localhost:8001/transactions).

4. **Start the React app:**

    ```bash
    npm start
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage

- **Add Transaction:** Fill out the form on the left side and submit to add a new transaction.
- **Search Transactions:** Use the search bar to filter transactions by description.
- **View Transactions:** The list of transactions is displayed on the right side.
