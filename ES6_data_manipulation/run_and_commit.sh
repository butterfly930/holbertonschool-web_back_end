#!/bin/sh

# Run the checker script
./run_checker.sh

# Check if the checker script was successful
if [ $? -eq 0 ]; then
    echo "All tests passed!"

    # Add changes to git
    git add .

    # Commit changes
    git commit -m "Passed all tests"

    # Push changes
    git push
else
    echo "Tests failed. Please fix the errors and try again."
fi
