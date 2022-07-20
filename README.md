# Minimal repro for Node >=16.11 memory leak

Make sure to `npm install` first.

## Commands

* `npm run create` - Creates individual test files
* `npm run test` - Runs tests using jest
* `npm run test-vm-script` - This simply loads a bunch of different modules via `vm.Script` iteratively based on logging a bunch of files that Jest loads via vm.Script. 

## Results

Raw results can be found in `/results` but in summary:

### `vm.Script`
#### 1500 iterations

* `16.10.0` - 3.54MB -> 11.18MB
* `16.11.0` - 3.77MB -> 725.40MB
* `18.4.0` - 4.64MB -> 2758.78MB

### Jest
#### 1000 test files
* `16.10.0` - ~100MB - 20s
* `16.11.0` - ~350MB - 40s
* `18.4.0` - ~350MB - 40s

#### 5000 test files
* `16.10.0` - ~100MB - 94s
* `16.11.0` - ~600MB - 220s
* `18.4.0` - ~1200MB - 380s