import 'react-native';
import React from 'react';
import App from '../src/App';
import {render, fireEvent, cleanup} from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';


describe('banking_application', () => {
    let getByTestId, submitButton, input, amountHeader, recordsBody;

    beforeEach(() => {
        const wrapper = render(<App/>);
        getByTestId = wrapper.getByTestId;
        submitButton = getByTestId(IDS.SUBMIT_BUTTON);
        input = getByTestId(IDS.INPUT);
        amountHeader = getByTestId(IDS.AMOUNT_HEADER);
        recordsBody = getByTestId(IDS.RECORDS_BODY);
    });

    afterEach(() => {
        cleanup();
    });


    const IDS = {
        SUBMIT_BUTTON: 'submit-button',
        RECORDS_BODY: 'records-body',
        INPUT: 'app-input',
        AMOUNT_HEADER: 'amount'
    };

    const matchRow = (index, value) => {
        expect(recordsBody.children[index].children[1].children[0]).toHaveTextContent(value);
    };

    const setValue = (value) => {
        fireEvent.input(input, {
            target: {value: value},
        });
        fireEvent.click(submitButton);
    };

    const sort = () => {
        fireEvent.click(amountHeader);
    }

    it('should render the initial UI as expected', () => {
        expect(input.value).toBeFalsy();
        expect(amountHeader).toBeTruthy();
        expect(recordsBody).toBeTruthy();
        const records = recordsBody.children;
        expect(records.length).toEqual(7);
        matchRow(0, 'THE HACKERUNIVERSITY DES: CCD+ ID:0000232343');
        matchRow(3, 'HACKERBANK INC. DES:CCD+ ID: 33375894749');
        matchRow( 4, 'HACKERBANK1 BP DES: MERCH PMT ID:1358570');
    });


    it('should filter the data by initial date', () => {
        setValue('2019-11-29');
        expect(recordsBody.children.length).toEqual(3);
        matchRow(0, 'HACKERBANK DES: CREDIT O ID:1223232323');
        matchRow(1, 'HACKERBANK1 BP DES: MERCH PMT ID:1358570');
    });

    it('should sort the data on clicking the header', () => {
        sort();
        expect(recordsBody.children.length).toEqual(7);
        matchRow(0, 'HACKERBANK DES: DEBIT O ID:00097494729');
        matchRow(2, 'THE HACKERUNIVERSITY DES: CCD+ ID:0000232343');
        matchRow(4, 'HACKERBANK INC. DES:CCD+ ID: 33375894749');
    })

    it('should show the correct data when sort and filter are done together', () => {
        setValue('2019-11-29');
        sort();
        expect(recordsBody.children.length).toEqual(3);
        matchRow(0, 'HACKERBANK DES: DEBIT O ID:00097494729');
        matchRow(2, 'HACKERBANK1 BP DES: MERCH PMT ID:1358570') ;
    })

    it('should not filter data when date is not selected', () => {
        setValue('');
        expect(recordsBody.children.length).toEqual(7);
        matchRow(0, 'THE HACKERUNIVERSITY DES: CCD+ ID:0000232343');
        matchRow(3, 'HACKERBANK INC. DES:CCD+ ID: 33375894749');
        matchRow(4, 'HACKERBANK1 BP DES: MERCH PMT ID:1358570');
    })

});

