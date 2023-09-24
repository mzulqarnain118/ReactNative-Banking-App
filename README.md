# Banking Application

## Environment 

- React Version: ^16.3.1
- React Native Version: 0.63.2
- Node Version: v12 (LTS)
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/2ZELe__gTaIOkzOhbF1vJw/rn-hackerbank.gif)

## Functionality Requirements
Implement the following functionalities:

- All transactions are initially displayed inside the table in the order they are retrieved from the source. The transactions array is passed as props from the `AppComponent` to the `RecordsTable` component.

- Picking the date from the date input and pressing the `Filter` button should display all the records for that date in the table. If no date is chosen, the `Filter` button should not do anything.

- Clicking on the `Amount ($)` table header should sort the records visible on the table in ascending order of amount. The behavior is the same for multiple clicks on `Amount ($)`.

Each transaction object contains the following properties : 
- `String` date: The date when the transaction took place in the format YYYY-MM-DD.
- `String` description: The description of the transaction.
- `Number` type: The type of transaction, where 0 denotes a credit transaction and 1 denotes a debit transaction.
- `Float` amount: The total amount of the transaction.
- `String` balance: The balance of the account after the transaction was completed, prefixed with a dollar sign ($).

```
  {
    "date": "2019-12-03",
    "description": "HACKERBANK INC. DES:CCD+ ID: 33375894749",
    "type": 0,
    "amount": 1985.4,
    "balance": "$12,234.45"
  }
```

## Testing Requirements
- The `TextInput` to add the filter date should have the testID attribute `app-input`.
- The `Filter` button should have the testID attribute `submit-button`.
- The `Amount ($)` table header for sorting the data by amount should have the testID attribute `amount`.
- The table body container `TableBody`, which contains the record rows, should have the testID attribute `records-body`.

## Project Specifications

**Read Only Files**
- `__tests__/*`

**Commands**
- run: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```
- install: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```
- test: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```
