import { EmployeeTitlePipe } from './employeeTitle.pipe';

describe('EmployeeTitlePipe', () => {
  it('create an instance', () => {
    const pipe = new EmployeeTitlePipe();
    expect(pipe).toBeTruthy();
  });
});
