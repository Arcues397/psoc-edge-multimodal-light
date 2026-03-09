# AI赋能老人陪护智能照明系统
AI-Empowered Smart Eldercare Lighting System based on PSoC Edge

An edge-AI multimodal smart lighting system designed for elderly care scenarios, built on **PSoC Edge E84** and **RT-Thread**, integrating local AI inference, environmental sensing, voice interaction, and cloud connectivity.

---

# 1. Project Background

With the rapid growth of the aging population, many elderly people live alone and face safety risks during nighttime activities.

Traditional lighting devices provide only simple on/off functionality and cannot perceive environmental context or support intelligent interaction.

This project proposes an **AI-empowered smart lighting terminal** capable of:

- automatic environment perception
- voice interaction
- adaptive lighting control
- cloud-connected monitoring

The system is designed for **elderly care scenarios**, improving safety, usability, and intelligent interaction.

---

# 2. System Features

The system integrates **multimodal sensing + Edge AI + cloud interaction**.

Main functions include:

- Human presence detection
- Ambient light sensing
- Adaptive PWM lighting control
- Local keyword voice control
- Multimodal decision making
- Wi-Fi connectivity
- Web-based visualization
- Voice interaction with cloud AI
- Remote monitoring and configuration

---

# 3. Edge AI + Cloud AI Architecture

The system adopts a **hybrid edge-cloud intelligence architecture**.

## Edge AI (Device Side)

Edge AI handles real-time tasks:

- sensor data processing
- keyword spotting (KWS)
- multimodal decision logic
- lighting control

This ensures:

- low latency
- offline capability
- low power consumption

## Cloud AI (API)

Cloud AI provides advanced interaction:

- conversational voice interaction
- information query
- elderly assistance reminders

This architecture balances **real-time control and intelligent interaction**.

---

# 4. Hardware Platform

## Development Board

- Edgi-Talk / PSoC Edge E84

## Processor Architecture

- Cortex-M55  
- Cortex-M33  
- Ethos-U55 NPU  

## Sensors

- PIR human detection  
- ambient light sensor (ALS)  
- microphone  

## Actuators

- PWM LED lighting system  

## Connectivity

- Wi-Fi networking  

## User Interface

- Web dashboard  
- local display  

---

# 5. Software Stack

## Operating System

- RT-Thread RTOS  

## Development Environment

- RT-Thread Studio  

## AI Pipeline

- audio preprocessing  
- MFCC feature extraction  
- keyword spotting inference  

## Optional training tools

- PyTorch  
- ONNX  
- TensorFlow Lite Micro  

## Networking

- RT-Thread networking stack  
- Web UI dashboard  

---

# 6. System Architecture

```
Sensors
 ├── PIR
 ├── ALS
 └── Microphone
        ↓
Edge AI Processing
 ├── Filtering
 ├── Audio feature extraction
 ├── Keyword spotting
 └── Multimodal fusion
        ↓
Decision Engine
 ├── Lighting control logic
 ├── Voice command handling
 └── Scene management
        ↓
Execution Layer
 ├── PWM lighting control
 ├── Display interface
 └── Web monitoring
        ↓
Cloud AI (Optional)
 └── Conversational interaction
```

---

# 7. Repository Structure

```
psoc-edge-multimodal-light
│
├─ docs
│  ├─ project_proposal
│  ├─ system_architecture
│  └─ design_documents
│
├─ hardware
│  ├─ wiring
│  ├─ schematics
│  └─ enclosure_design
│
├─ firmware
│  ├─ rtthread_project
│  ├─ drivers
│  └─ application
│
├─ ai
│  ├─ dataset
│  ├─ training
│  └─ kws_model
│
├─ web
│  └─ dashboard
│
└─ README.md
```

---

# 8. Project Highlights

- Edge AI multimodal perception
- Hybrid edge-cloud intelligence
- Low-power embedded AI
- Real-time lighting control
- Smart elderly care scenario
- Full stack embedded system design

---

# 9. Target Application

- elderly care smart homes
- intelligent bedside lighting
- AIoT smart lighting terminals
- embedded AI education and competitions

---

# 10. License

MIT License
