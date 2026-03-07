from pathlib import Path
import zipfile

base = Path("/mnt/data/psoc_edge_repo_templates")
(base / ".github" / "ISSUE_TEMPLATE").mkdir(parents=True, exist_ok=True)

contributing = """# CONTRIBUTING.md

感谢你为 **PSoC Edge 多模态端侧 AI 智能照明系统** 项目做出贡献。

本项目基于 **PSoC Edge E84 + RT-Thread**，目标是实现一个融合环境感知、关键词识别（KWS）、自适应灯光控制、Wi-Fi 联网与 Web 可视化的端侧智能照明终端。

为了保证协作效率、代码质量和可维护性，请在提交代码前阅读本文件。

---

## 1. 参与方式

你可以通过以下方式参与项目：

- 提交 Bug 报告
- 提交功能建议
- 完善文档
- 修复问题
- 开发新功能
- 优化性能或代码结构

---

## 2. 开发环境建议

### 软件环境
- RT-Thread Studio（推荐最新版）
- Git
- Python 3.x（用于模型训练、脚本或工具链）
- 浏览器（用于 Web UI 测试）

### 硬件环境
- Edgi-Talk / PSoC Edge E84 开发板
- 必要的传感器与执行器（PIR、ALS、LED/PWM 灯路、麦克风等）

---

## 3. 分支规范

建议使用以下分支策略：

- `main`：稳定分支，可用于展示、答辩、版本归档
- `dev`：日常开发分支
- `feature/<name>`：功能开发分支
- `fix/<name>`：问题修复分支
- `docs/<name>`：文档更新分支

示例：

- `feature/kws-inference`
- `feature/web-dashboard`
- `fix/pwm-flicker`
- `docs/update-readme`

---

## 4. 开发流程

1. 从 `dev` 拉取最新代码
2. 新建功能分支
3. 完成开发与本地测试
4. 按提交规范提交 commit
5. 推送分支并发起 Pull Request
6. 经检查和测试后合并

---

## 5. 提交前检查清单

提交前请尽量确认以下内容：

### 通用
- [ ] 工程可以正常编译
- [ ] 关键功能未被破坏
- [ ] 没有提交无关文件
- [ ] 代码已按模块整理
- [ ] 日志输出不过量
- [ ] README 或文档已同步更新（如有必要）

### 嵌入式 / 板端代码
- [ ] 新增外设驱动有清晰注释
- [ ] 状态机逻辑可读
- [ ] 硬件相关参数未硬编码到多个文件
- [ ] 中断、线程、队列等使用合理
- [ ] 断网状态下核心功能仍可运行

### AI / 模型相关
- [ ] 模型来源、训练方式、输入输出说明清楚
- [ ] 推理接口与版本已记录
- [ ] 不直接提交超大原始训练文件（如无必要）
- [ ] 模型量化、导出、部署流程可复现

### Web / UI 相关
- [ ] 页面在常见桌面浏览器可正常显示
- [ ] 参数修改与状态展示逻辑清晰
- [ ] 不依赖外网服务才能完成基础交互

---

## 6. 代码风格建议

### C / C++
- 使用统一命名风格
- 适度注释，尤其是状态机、线程和硬件相关逻辑
- 避免把多种功能写在一个文件中
- 优先按模块拆分：`drivers/`, `services/`, `app/`, `web/`

### Python
- 用于训练、转换、测试的脚本请放在 `tools/` 或 `models/`
- 对输入输出、依赖环境写明说明

### Web
- 前端页面尽量简洁
- 参数项、状态项命名与设备端保持一致
- 避免在页面中写死设备地址或敏感信息

---

## 7. Pull Request 要求

PR 标题建议简洁明确，例如：

- `feat: add local KWS inference pipeline`
- `fix: correct ALS threshold logic`
- `docs: update deployment steps`

PR 描述建议包含：
- 变更目的
- 主要修改内容
- 测试方式
- 影响范围
- 截图 / 日志（如适用）

---

## 8. 不建议提交的内容

- 大体积临时文件
- IDE 缓存文件
- 无说明的模型文件
- 本地测试日志、截图、导出缓存
- 与项目无关的实验代码

---

## 9. Issue 与沟通

请优先通过 Issue 提交：
- Bug 报告
- 功能建议
- 文档问题
- 任务拆分建议

描述尽量具体，便于复现和讨论。

---

## 10. 项目协作原则

本项目以“**先稳定，再增强；先闭环，再扩展**”为原则推进。  
在新增功能前，请优先保证以下基础链路稳定：

- PIR / ALS 感知
- PWM 灯光控制
- 状态机逻辑
- 本地 KWS 推理
- Wi-Fi / Web 状态展示

感谢你的贡献。
"""

---

## 1. 基本格式

```bash
<type>: <summary>
