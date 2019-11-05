---
draft: true
---

| Events            | Description                                                                                                                                                                                            |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `on_change`       | _(optional)_ will be called on state changes made by the user. Returns an boolean `{ checked, event }`.                                                                                                |
| `on_change_end`   | _(optional)_ will be called on state changes made by the user, but with a delay. This way the users sees the animation, before e.g. an error will be removed. Returns an boolean `{ checked, event }`. |
| `on_state_update` | _(optional)_ will be called once the parameter `checked` changes its state.                                                                                                                            |