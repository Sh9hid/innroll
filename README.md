# 🎓 Innroll — Effortless Student Registration & Management

**Innroll** is a lightweight, browser-based student registration system that feels like magic — no backend, no database, just clean UI and robust data persistence powered by the browser’s `localStorage`.

Whether you're running a classroom, organizing a workshop, or building a quick prototype, **Innroll** makes managing student records simple, fast, and delightful.

---

## ✨ Features at a Glance

- **📋 Student Registration Form**  
  Collect student details (name, ID, contact number, email) through a seamless and responsive form.

- **📑 Records Table**  
  View all registered students in a neatly organized table, complete with **Edit** and **Delete** options.

- **💾 Persistent Data Storage**  
  Data is saved in the browser’s `localStorage` — no backend needed. Refresh the page or close the browser, your records will still be there.

- **✅ Smart Input Validation**  
  Each field is validated for correct format and completeness to ensure high-quality data entry.

- **🖊️ Real-Time Edit & Delete**  
  Modify or remove entries instantly, with automatic updates reflected in both the UI and storage.

- **📜 Scrollable Record View**  
  When the number of records grows, a vertical scrollbar appears automatically to maintain usability and layout.

---

## 🔧 Contribution Functionality

Innroll isn’t just a static form — it supports collaborative use cases through local contribution tracking:

- **🧑‍🤝‍🧑 Role-based Interaction** *(Optional Enhancement)*  
  - `Admin`: Full control — add, edit, delete all records  
  - `Contributor`: Add and manage their own records only  

- **🏷️ Contributor Attribution**  
  Optionally tag records with the contributor’s name or ID to keep track of who added what.

- **🕒 Version Snapshots** *(Advanced Feature)*  
  Save and restore previous data states with snapshot backups in localStorage.

- **🔄 Real-time Awareness (Same Browser)**  
  Edits made in one tab reflect in others instantly — useful for shared desktop setups.

- **🆔 Unique Contributor ID**  
  Each user can set a local username that persists across sessions and is associated with the records they create.

> Note: Collaboration is limited to the same browser environment. For true multi-user sync, the structure is designed to scale into a backend/API-powered app with minimal refactoring.

---

## ⚙️ Tech Stack

- HTML5 + CSS3 + JavaScript (Vanilla)
- LocalStorage API


---

## 🚀 Getting Started

No build tools, no installs — just clone and run:

```bash
git clone https://github.com/Sh9hid/innroll.git
cd innroll
