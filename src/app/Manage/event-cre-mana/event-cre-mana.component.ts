import { Component } from '@angular/core';

@Component({
  selector: 'app-event-cre-mana',
  templateUrl: './event-cre-mana.component.html',
  styleUrls: ['./event-cre-mana.component.css']
})
export class EventCreManaComponent {

}
interface Event {
  title: string;
  date: string;
  time: string;
}

class EventManager {
  private events: Event[] = [];

  createEvent(title: string, date: string, time: string): void {
      const newEvent: Event = { title, date, time };
      this.events.push(newEvent);
      this.displayEvents();
  }

  deleteEvent(index: number): void {
      this.events.splice(index, 1);
      this.displayEvents();
  }

  displayEvents(): void {
      const eventListContainer = document.getElementById('eventList');
      if (eventListContainer) {
          eventListContainer.innerHTML = '';

          this.events.forEach((event, index) => {
              const eventItem = document.createElement('div');
              eventItem.classList.add('event-item');
              eventItem.innerHTML = `
                  <strong>${event.title}</strong> - ${event.date} ${event.time}
                  <button onclick="eventManager.deleteEvent(${index})">Delete</button>
              `;
              eventListContainer.appendChild(eventItem);
          });
      }
  }
}

const eventManager = new EventManager();

function openEventForm(): void {
  const eventFormContainer = document.getElementById('eventForm');
  if (eventFormContainer) {
      eventFormContainer.innerHTML = `
          <h2>Create Event</h2>
          <form>
              <label for="eventTitle">Event Title:</label>
              <input type="text" id="eventTitle" required>

              <label for="eventDate">Event Date:</label>
              <input type="date" id="eventDate" required>

              <label for="eventTime">Event Time:</label>
              <input type="time" id="eventTime" required>

              <button type="button" onclick="createEvent()">Create Event</button>
          </form>
      `;
  }
}

function createEvent(): void {
  const titleInput = document.getElementById('eventTitle') as HTMLInputElement;
  const dateInput = document.getElementById('eventDate') as HTMLInputElement;
  const timeInput = document.getElementById('eventTime') as HTMLInputElement;

  const title = titleInput.value;
  const date = dateInput.value;
  const time = timeInput.value;

  if (title && date && time) {
      eventManager.createEvent(title, date, time);
      closeEventForm();
  } else {
      alert('Please fill in all the fields.');
  }
}

function closeEventForm(): void {
  const eventFormContainer = document.getElementById('eventForm');
  if (eventFormContainer) {
      eventFormContainer.innerHTML = '';
  }
}

// Display initial events (for testing purposes)
eventManager.createEvent('Event 1', '2023-01-01', '10:00');
eventManager.createEvent('Event 2', '2023-02-15', '14:30');

