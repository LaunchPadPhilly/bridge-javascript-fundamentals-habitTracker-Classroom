/* Hands-on Practice & Project Application (15 minutes)
    
    Mini-Challenge: Build App Data Models (10 minutes)
    Individual Exercise:
    
    Create JavaScript objects that represent their app's core data:
*/

// Example for habit tracker app
"use strict";

let habitTracker = {

    user: {
        name: "",
        joinDate: "",
        totalPoints: 0
    },
    habits: [
        {
            name: "",
            category: "",
            streak: 0,
            target: 0,
            completed: false
        }
    ],
    settings: {
        notifications: true,
        theme: "light"
    }
};

// Add methods to update data
function completeHabit(habitName) {

    // Find habit and mark complete
    let habit = habitTracker.habits.find(h => h.name === habitName);

    if (habit) {

        habit.completed = true;
        habit.streak += 1;
        habitTracker.user.totalPoints += 10; // Example points for completing a habit
    }
}
// Update user points
function updateUserPoints(points) {

    habitTracker.user.totalPoints += points;

    // Check streaks
    habitTracker.habits.forEach(habit => {
        if (habit.completed) {
            habit.streak += 1;
        }
    });
}

