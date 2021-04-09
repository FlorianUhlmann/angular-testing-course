import {CalculatorService} from './calculator.service';
import {LoggerService} from './logger.service';

describe('Calculator Service', () => {

  let calculator : CalculatorService
  let loggerSpy  : any;

  beforeEach(()=>{
    console.log("in before Each")
    loggerSpy = jasmine.createSpyObj('LoggerService', ["log"]);

    calculator = new CalculatorService(loggerSpy);
  })


  it('should add two numbers', () =>{

    const result = calculator.add(2,2);

    expect(result).toBe(4);

    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  })

  it('should substract two numbers', () =>{
    const result = calculator.subtract(10,10);
    expect(result).toBe(0);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  })
})
