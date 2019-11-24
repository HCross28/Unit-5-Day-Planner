# Unit-5-Day-Planner
So this one was a bit brutal... 

I ran into issues regarding how to get user input to then save into local storage and append to my list. 
Once I gave up on that endeavor I figured I would try to get the clock working... Yet for some reason the incorrect date would appear. 
After toying with that for longer than what I would care to admit, I realized I've ended up in quite a coding quagmire. 

So here is what I do have. 

-A beautifully displayed to do list application 

-Bootstrap was used to build out the table with the appropriate columns needed to display the information
    The column on the left shows the hour (which if I ever got the clock to work correctly might have been able to color in)
    The column in the middle shows either the text area (unlocked) or the list with todo items (locked)
    The column on the right has my AMAZING lock/unlock button with mostly full functionality
        The only missing functionality of the buttons was to take any text in the textarea and save it to local storage then append it to the ul that would then show up once the button was clicked

-The Console will display my clock. The time is correct, however the displayed date is not. Not quite sure why that is the case. 
    Most all google/stack-overflow/etc... mentioned that it had to do with UTC time zone, or an issue with a string being passed into it. 

Imposter Syndrome is definitely rearing it's ugly head at the moment. 

