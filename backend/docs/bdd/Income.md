Feature: Income

    Scenario: Add new Income Transaction
        Given the user creates a new income transction
        When he sends the data
        Then The WS saves the data in the database
        And return the transaction data
