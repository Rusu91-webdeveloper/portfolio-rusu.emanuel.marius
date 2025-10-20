# 🧠 Full AI Coding Assistant Workflow

This guide outlines a repeatable, structured process for working with AI coding assistants to build production-quality software. We'll use the example of building a **Supabase MCP server with Python**, but the same process applies to any AI coding workflow.

---

## 🔑 Golden Rules

These high-level principles guide efficient and effective AI-assisted coding:

- **Use markdown files** to manage the project (**README.md, PLANNING.md, TASK.md**).
- **Keep files under 500 lines**; split into modules as needed.
- **Start fresh conversations often** to maintain response quality.
- **Limit each AI request to one task** to avoid overloading the model.
- **Test early, test often**; every new function should have unit tests.
- **Be specific in your requests**; provide examples where possible.
- **Write documentation and comments as you code.**
- **Implement environment variables manually**; don’t trust the AI with API keys.

---

## 🧠 Planning & Task Management

Before writing code, define the **project scope and tasks**:

### **PLANNING.md**

- **Purpose**: Define high-level vision, architecture, constraints, tech stack, and tools.
- **Prompt to AI**: _"Use the structure and decisions outlined in PLANNING.md."_
- **Best Practice**: Reference this file at the start of any new conversation.

### **TASK.md**

- **Purpose**: Tracks current tasks, backlog, and sub-tasks.
- **Includes**: Bullet list of active work, milestones, and discoveries.
- **Prompt to AI**: _"Update TASK.md to mark XYZ as done and add ABC as a new task."_
- **Best Practice**: Have AI automatically update tasks as needed.

---

## ⚙️ Global Rules (For AI IDEs)

Enforce project-wide best practices using global rules in AI IDEs.

### **Examples of AI IDE Rules**:

- **Cursor Rules**: [Cursor AI Docs](https://docs.cursor.com/context/rules-for-ai)
- **Windsurf Rules**: [Codeium Windsurf Rules](https://docs.codeium.com/windsurf/memories#windsurfrules)
- **Cline Rules**: [Cline AI Rules](https://docs.cline.bot/improving-your-prompting-skills/prompting)
- **Roo Code Rules**: [Roo Code AI](https://docs.roocode.com/features/mcp/using-mcp-in-roo)

#### **Example Project-Level Rules**:

- Always **read PLANNING.md** at the start of a conversation.
- Always **check TASK.md** before starting a task.
- Follow **consistent naming conventions, file structures, and architecture patterns**.

---

## 🧱 Code Structure & Modularity

- **Keep files under 500 lines**; refactor into modules if needed.
- **Organize code into clearly separated modules**, grouped by feature or responsibility.
- **Use clear, consistent imports** (prefer relative imports within packages).

---

## 💪 Testing & Reliability

- **Use Pytest** for unit tests.
- **After updates, check if existing tests need modifications.**
- **Store tests in a `/tests` folder**, mirroring the main app structure.
- **Include at least:**
  - One test for expected use
  - One edge case
  - One failure case

---

## ✅ Task Completion

- **Mark completed tasks in TASK.md** immediately.
- **Log new sub-tasks** under “Discovered During Work.”

---

## 📎 Style & Conventions

- **Primary Language**: Python
- **Follow PEP8**, use **type hints**, format with **black**.
- **Use pydantic** for data validation.
- **Use FastAPI** for APIs, **SQLAlchemy/SQLModel** for ORM.
- **Write Google-style docstrings**:

  ```python
  def example():
      """
      Brief summary.

      Args:
          param1 (type): Description.

      Returns:
          type: Description.
      """
  ```

---

## 📚 Documentation & Explainability

- **Update README.md** when features, dependencies, or setup steps change.
- **Comment non-obvious code** for clarity.
- **Use inline comments for complex logic** (e.g., `# Reason: explains why`).

---

## 🧠 AI Behavior Rules

- **Ask for missing context** instead of making assumptions.
- **Use only known, verified Python packages**.
- **Confirm file paths and module names before referencing them**.
- **Never overwrite existing code unless explicitly instructed.**

---

## 🛠️ Configuring MCP

**MCP (Model Context Protocol)** allows AI assistants to interact with services like:

- **File system** (read/write, refactor, multi-file edits)
- **Web search** (via Brave, for documentation retrieval)
- **Git** (branching, committing, diffing)
- **Memory & integrations** (e.g., Qdrant)

#### **How to Configure MCP**:

- [Cursor MCP Docs](https://docs.cursor.com/context/model-context-protocol)
- [Windsurf MCP Docs](https://docs.codeium.com/windsurf/mcp)
- [Cline MCP Docs](https://docs.cline.bot/mcp-servers/mcp)
- [Roo Code MCP Docs](https://docs.roocode.com/features/mcp/using-mcp-in-roo)

---

## 💬 Initial Prompt to Start the Project

The first prompt is crucial for guiding the AI effectively:

### **Example Prompt for Supabase MCP Server:**

```plaintext
Use @docs:model-context-protocol-docs and @docs:supabase-docs to create an MCP server written in Python (using FastMCP) to interact with a Supabase database. The server should use the Stdio transport and support:
- Read rows in a table
- Create, update, and delete records in a table
- Include environment variables for Supabase project URL and service role key.
```

---

## 🧉 Modular Prompting Process (Post Initial Prompt)

- **Provide single-task prompts** for best results.
- **Example:** “Update `list_records` to add filtering.”
- **Bad example:** “Update `list_records`, fix API key error, and improve docs.”

---

## 🛠️ Docker Deployment (Optional)

For cloud hosting and sharing:

### **Dockerfile Example:**

```dockerfile
FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["python", "server.py"]
```

### **Build Command:**

```sh
docker build -t mcp/supabase .
```

**Example AI Prompt:** _“Write a Dockerfile for this MCP server and give me the build commands.”_

---

By following this structured approach, you can maximize efficiency when working with AI coding assistants and ensure high-quality, production-ready code.
