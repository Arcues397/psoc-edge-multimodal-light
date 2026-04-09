# AI-Empowered Smart Eldercare Lighting System based on PSoC Edge
**AI赋能老人陪护智能照明系统**

*An edge-AI multimodal smart lighting terminal integrating Edge AI perception and cloud voice interaction for elderly care scenarios.*

---

# 1. Project Background

With the deepening aging population, the number of elderly individuals living alone continues to rise. Due to declining physical functions and lack of companionship, issues such as **nighttime mobility difficulties, high fall risks, and emergency assistance challenges** are becoming increasingly prominent.

Traditional lighting devices offer only basic on/off functionality, lacking environmental perception and intelligent interaction capabilities to meet the demands of smart elderly care.

Leveraging advances in **Embedded AI** and **Edge Computing**, this project designs an **AI-empowered smart lighting system** based on **PSoC Edge**. The system achieves intelligent lighting control, voice companionship, and remote management through **multimodal perception, on-device AI inference, and cloud AI interaction**.

---

# 2. System Features & Objectives

The system integrates **Multimodal Sensing + Edge AI + Cloud Interaction**.

| Category | Features |
| :--- | :--- |
| **Sensing & Control** | Automatic environment perception & adaptive lighting adjustment |
| **Edge AI** | Local keyword spotting (3 keywords), Multimodal scene decision |
| **Cloud AI** | Conversational AI interaction, Voice companionship, Info query |
| **Visualization** | Dual display via Local Screen & Web Dashboard |
| **Performance** | Low-power operation, Offline/Online hybrid capability |

---

# 3. Edge AI + Cloud AI Architecture

The system adopts a **hybrid edge-cloud intelligence architecture**.

### Edge AI (Device Side)
Responsible for **low-latency, offline-capable** real-time tasks:
- **Sensing Layer**: PIR human detection, ALS ambient light, Microphone array.
- **Feature Extraction**: Audio filtering, MFCC feature extraction (DSP/Helium accelerated).
- **Inference**: Keyword Spotting (KWS) running on **Ethos-U55 NPU**.
- **Decision**: State machine logic, Scene fusion control.

### Cloud AI (API Service)
Responsible for **complex semantic understanding and companionship**:
- Natural Language Processing (NLP)
- Weather queries / Medication reminders
- Casual conversation / Companionship dialogue

### Task Routing Mechanism
- **Control Commands** (e.g., "Lights On") $\rightarrow$ Processed by **Local Edge AI**.
- **Dialogue Queries** (e.g., "What's the weather?") $\rightarrow$ Routed to **Cloud AI API**.

---

# 4. Hardware Platform

- **Development Board**: PSoC Edge E84 (Edgi-Talk compatible)
- **Processor Architecture**:
    - **Cortex-M55** (Main control / DSP Helium for MFCC)
    - **Cortex-M33** (System management)
    - **Ethos-U55 NPU** (AI acceleration)
- **Sensors**: PIR, ALS, Microphone
- **Actuators**: PWM LED Lighting System
- **Connectivity**: Wi-Fi
- **User Interface**: Local Display + Web Dashboard

---

# 5. Software Stack & Heterogeneous Computing

### Operating System
- RT-Thread RTOS

### Heterogeneous Core Task Assignment
| Hardware Unit | Assigned Tasks |
| :--- | :--- |
| **Cortex-M33 / M55 (CPU)** | Peripheral drivers, System scheduling, Lighting state machine, Network comms, Decision fusion |
| **DSP / Helium (M55)** | Audio pre-processing, FFT, MFCC feature extraction |
| **Ethos-U55 (NPU)** | Keyword Spotting (KWS) model inference |

### Development & AI Pipeline
- **IDE**: RT-Thread Studio
- **AI Workflow**: PyTorch / TensorFlow $\rightarrow$ ONNX $\rightarrow$ TensorFlow Lite Micro $\rightarrow$ NPU Deployment
- **Networking**: RT-Thread SAL layer, Web UI dashboard

---

# 6. System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLOUD AI LAYER (Optional)                │
│          [Conversational API: Weather / Reminders / Chat]        │
└───────────────────────────────┬─────────────────────────────────┘
                                │ Wi-Fi (Task Routing)
┌───────────────────────────────▼─────────────────────────────────┐
│                        EDGE AI PROCESSING (Local)               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │   Sensors    │  │   DSP/Helium │  │   NPU (Ethos-U55)    │  │
│  │ PIR/ALS/Mic  │──│   MFCC/FFT   │──│   KWS Inference       │  │
│  └──────────────┘  └──────────────┘  └──────────┬───────────┘  │
│                                                  │               │
│                      ┌───────────────────────────▼───────────┐  │
│                      │       Decision Engine (CPU)           │  │
│                      │   Multimodal Fusion + State Machine   │  │
│                      └───────────────┬───────────────────────┘  │
│                                      │                           │
│  ┌──────────────────┐  ┌────────────┴───────┐  ┌─────────────┐  │
│  │   Execution      │  │   Connectivity      │  │   Display   │  │
│  │ PWM Light Control│  │   Web Dashboard     │  │ Local UI    │  │
│  └──────────────────┘  └────────────────────┘  └─────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

---

# 7. Project Highlights & Innovation

- **Edge-Cloud Collaborative AI**: Balances low-latency local control with rich cloud intelligence.
- **Elderly-Centric Design**: Focuses on nighttime safety and ease of use for seniors.
- **Multimodal Perception**: Fuses PIR, ALS, and Voice for accurate context awareness.
- **Low-Power Embedded AI**: Real-time AI decision-making on resource-constrained hardware.
- **Dual Interaction Modes**: Supports both hands-free voice control and remote web management.
- **Full Stack Integration**: Complete hardware, firmware, AI model, and web dashboard implementation.

---

# 8. Target Application & Expected Outcomes

### Target Scenarios
- Elderly care smart homes
- Intelligent bedside/nightstand lighting
- AIoT smart lighting terminals
- Embedded AI education & competition demonstrations

### Expected Deliverables
1.  **Prototype System**: Functional smart eldercare lighting terminal.
2.  **AI Model**: On-device KWS model optimized for PSoC Edge.
3.  **Algorithm**: Multimodal fusion control algorithm.
4.  **Software**: Web visualization dashboard with remote config.
5.  **Documentation**: Complete system design docs, project video, and presentation materials.

---

# 9. Development Roadmap

| Phase | Month | Key Tasks |
| :--- | :--- | :--- |
| **Phase 1** | March | Environment setup, PWM LED dimming, PIR/ALS data acquisition, Basic control loop. |
| **Phase 2** | April | Audio capture implementation, MFCC extraction (Helium), KWS model training. |
| **Phase 3** | May | Multimodal fusion logic, Wi-Fi stack integration, Web dashboard UI development. |
| **Phase 4** | June | Cloud API voice interaction integration, System stability testing, Enclosure prototyping. |
| **Phase 5** | Early July | Final documentation, Demo video production, Presentation preparation. |

---

# 10. License

MIT License
