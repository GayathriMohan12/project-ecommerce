import { formatCurrency } from "../javascript-amazon-project-main/scripts/utils/money.js";

if(formatCurrency(2095) === 2095){
    console.log('passed');
} else {
    console.log('failed');
}
