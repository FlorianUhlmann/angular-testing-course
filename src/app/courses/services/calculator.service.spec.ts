import { TestBed } from '@angular/core/testing';
import {CalculatorService} from './calculator.service';
import {LoggerService} from './logger.service';

describe('Calculator Service', () => {


  let calculator : CalculatorService
  let loggerSpy  : any;


    beforeEach(()=>{


      console.log("in before Each")
      loggerSpy = jasmine.createSpyObj('LoggerService', ["log"]);

      //Depending INjection, instead of calling constructors directly ()
      TestBed.configureTestingModule({
        providers: [
            CalculatorService,
            {provide: LoggerService, useValue: loggerSpy}
        ]
      });
        calculator = TestBed.get(CalculatorService);
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
