# Minimal repro for Node >=16.11 memory leak

## Commands

* `npm run create` - Creates individual test files
* `npm run test` - Runs tests using jest

## Results

Raw results can be found in `/results` but in summary:

## 1000 test files
* `16.10.0` - ~100MB - 20s
* `16.11.0` - ~350MB - 40s
* `18.4.0` - ~350MB - 40s

## 5000 test files
* `16.10.0` - ~100MB - 94s
* `16.11.0` - ~600MB - 220s
* `18.4.0` - ~1200MB - 380s