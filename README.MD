# HabitTracker Project

## Overview
Welcome to the HabitTracker project! You'll be building a web-based habit tracking application that helps users monitor their daily habits and build positive routines.

## Your Task
Create an HTML page that serves as the user interface for the HabitTracker application. The JavaScript functionality is already provided in `habitTracker.js` - your job is to build the frontend that users will interact with.

## Project Requirements

### Core Features to Implement
1. **User Profile Section**
   - Display user name, join date, and total points
   - Allow editing of user information

2. **Habit Management**
   - Add new habits with name, category, and target
   - Display current habits in an organized list
   - Mark habits as complete
   - Show streak counters

3. **Settings Panel**
   - Toggle notifications on/off
   - Switch between light/dark themes

## Using GenAI Tools to Build Your HTML

### Prompt 1: Basic HTML Structure
```
Create a complete HTML page for a habit tracking app. Include:
- A header with the app title "HabitTracker"
- A user profile section showing name, join date, and total points
- A main section for displaying habits
- A form to add new habits (name, category, target)
- A settings panel with notification toggle and theme switcher
- Include modern CSS styling with a clean, minimalist design
- Use semantic HTML elements and ensure accessibility
- Make it responsive for mobile and desktop
```

### Prompt 2: Enhanced Styling and Interactivity
```
Improve the HabitTracker HTML with:
- Modern CSS Grid or Flexbox layout
- Attractive color scheme (consider both light and dark themes)
- Hover effects and smooth transitions
- Progress bars or visual indicators for habit streaks
- Card-based design for individual habits
- Responsive navigation
- Font icons for actions (complete, edit, delete)
- CSS animations for completing habits
```

### Prompt 3: JavaScript Integration
```
Add JavaScript functionality to connect with the provided habitTracker.js file:
- Form submission to add new habits to the habitTracker object
- Click handlers to mark habits as complete using the completeHabit() function
- Display updates when habits are completed (streak increment, points update)
- Settings toggles that update the habitTracker.settings object
- Local storage to persist data between sessions
- Dynamic rendering of habits from the JavaScript object
```

### Prompt 4: Advanced Features (Optional)
```
Add advanced features to the HabitTracker:
- Charts or graphs showing habit completion over time
- Categories with different colors and icons
- Achievement badges for milestones
- Habit completion calendar view
- Export/import functionality for habit data
- Motivational quotes or tips
- Progress analytics and statistics
```

## Getting Started

1. **Create your HTML file**: Name it `index.html`
2. **Use the provided prompts**: Copy and paste the prompts above into your preferred GenAI tool (ChatGPT, Claude etc.)
3. **Iterate and refine**: Use follow-up prompts to adjust styling, add features, or fix issues
4. **Test integration**: Make sure your HTML works with the existing `habitTracker.js`
5. **Customize**: Add your own creative touches and improvements

## Tips for Working with GenAI

- **Be specific**: The more detailed your prompts, the better the results
- **Iterate gradually**: Start with basic structure, then add complexity
- **Ask for explanations**: Request comments in the code to understand how it works
- **Test frequently**: Check that generated code actually works as expected
- **Combine outputs**: You might need to merge code from multiple AI responses

## Bonus Challenges

- Implement data visualization for habit trends
- Add gamification elements (levels, achievements)
- Create different habit categories with unique features
- Build a habit sharing/social feature
- Add habit reminders and notifications

## Submission Guidelines

Your final submission should include:
- `index.html` - Your main HTML file
- Any additional CSS files (if separated from HTML)
- Screenshots of your working application
- A brief reflection on your GenAI prompting experience

## Resources

- [MDN HTML Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [JavaScript DOM Manipulation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

Good luck building your HabitTracker! Remember, the goal is to create a functional, attractive interface that works seamlessly with the provided JavaScript backend.