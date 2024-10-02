# TDD-Assessment

# String Calculator

## Overview

The **String Calculator** is a simple application that allows users to perform addition on a string of numbers. The calculator can handle various delimiters, including commas, newlines, and custom delimiters, while providing clear error messages for invalid inputs.

## Features

- Supports addition of numbers using:
  - Comma (`,`) as a delimiter.
  - Newline (`\n`) as a delimiter.
  - Plus sign (`+`) as a delimiter.
  - Custom delimiters defined at the beginning of the input.
- Handles empty strings gracefully by returning `0`.
- Throws an error when negative numbers are included in the input.
- Displays the result dynamically in the frontend.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Run

```bash
npm run test
```
