# Algorithm: Mini-Max Sum

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

For example, if arr = [1, 3, 5, 7, 9], the minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is 3 + 5 + 7 + 9 = 24. Therefore, we would print:
16 24

## Function Description

Complete the miniMaxSum function. It should print two space-separated integers on one line: the minimum sum and the maximum sum of 4 out of 5 elements.

`miniMaxSum` has the following parameter(s):

- arr: an array of 5 integers

## Input Format

A single line of five space-separated integers.

## Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers.
(The output can be greater than a 32-bit integer.)

### Sample Input

[1, 2, 3, 4, 5]

### Sample Output

10 14

# Front-end: ReactJs Joke App
Deployed link: https://gens-two.vercel.app/

This ReactJS app will display a single joke for the user to read. After reading the joke, the user can like or dislike the joke. The app will record the vote in the database and then show another joke for the user to read. When there are no more jokes to show, the app will display a "That's all the jokes for today! Come back another day!" message.

There is no need to display the result of the votes. Users should not see the same joke twice. Users do not need to register or log in to view the joke or vote for the joke.

# Back-end: PHP - Laravel 10

## Restful APIs:

### 1. v1/api/jokes

- Endpoint: /v1/api/jokes
- Description: Returns a random joke.
- Method: GET
- Response: JSON object containing a random joke.

### 2. v1/api/jokes/{id}

- Endpoint: /v1/api/jokes/{id}
- Description: Update the vote for a specific joke.
- Method: POST
- Parameters:
  - id: The ID of the joke to update.
  - Request body: JSON object containing id, funny or notFunny params
- Response: JSON object confirming the successful update of the vote.

These Restful APIs allow clients to retrieve random jokes and update the votes for specific jokes in the system. The APIs follow best practices for Restful API design and are implemented using the Laravel 10 framework.
