# Qarar Dashboard

## Setup & Run Instructions

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at `http://localhost:5173` (or the port shown in your terminal).

3. **Build for production:**
   ```bash
   npm run build
   # or
   yarn build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   # or
   yarn preview
   ```

## Brief Overview of Approach

- **Tech Stack:** React, TypeScript, Redux Toolkit, Tailwind CSS, Vite.
- **Design:** Pixel-perfect UI based on provided references, with a focus on responsiveness and accessibility.
- **State Management:** Redux Toolkit is used for managing authentication, tasks, and notifications.
- **Styling:** Tailwind CSS for rapid, utility-first, and responsive design. Custom classes and inline styles are used for pixel-perfect details.
- **Componentization:** The UI is broken down into reusable, type-safe components (e.g., SalesCard, TasksList, TaskItem, ProfileForm).
- **Type Safety:** TypeScript interfaces and types are used throughout for maintainability and error prevention.

## Assumptions & Trade-offs

- **Assumptions:**
  - The provided UI references are the source of truth for pixel-perfect implementation.
  - The app is primarily for desktop and tablet, but is made responsive for mobile as well.
  - Mock data is used for tasks, sales, and notifications unless otherwise specified.
  - No backend integration is included; all state is local (Redux store).

- **Trade-offs:**
  - Some custom UI elements (e.g., checkboxes, drag handles) use inline SVG and custom styles for exactness, which may be less reusable than generic components.
  - Accessibility is considered, but some ARIA attributes or keyboard navigation may need further enhancement for production.
  - The focus is on matching the design and code quality, not on advanced features (e.g., real drag-and-drop, persistent storage).
