# PSoC Edge Multimodal Smart Lighting System

A multimodal edge AI smart lighting system based on PSoC Edge E84 and RT-Thread, integrating local keyword spotting, ambient sensing, adaptive lighting control, Wi-Fi connectivity, and Web-based visualization.

---

## 1. Project Overview

This project aims to build a multimodal on-device AI smart lighting terminal based on **PSoC Edge E84** and **RT-Thread**.

The system combines:

- PIR-based human presence detection
- ALS-based ambient light sensing
- local keyword spotting (KWS)
- adaptive lighting control
- Wi-Fi networking
- Web-based monitoring and configuration
- local screen-based user interaction

The goal is to achieve a low-latency, low-power, cloud-independent intelligent lighting system suitable for embedded AI demonstrations and competition projects.

---

## 2. Project Goals

- Build a stable smart lighting control loop
- Support local keyword spotting for voice interaction
- Implement multimodal decision-making based on voice and environment
- Provide Wi-Fi connectivity and Web-based visualization
- Improve system usability and engineering completeness

---

## 3. Core Features

- Human presence detection
- Ambient light sensing
- PWM-based adaptive lighting control
- Multiple lighting modes
- Local keyword spotting
- Web-based status visualization
- Wi-Fi-based parameter configuration
- Local screen UI display
- Low-power optimization (planned)

---

## 4. Hardware Platform

- **Board**: Edgi-Talk / PSoC Edge E84
- **MCU**: Cortex-M55 + Cortex-M33
- **NPU**: Ethos-U55
- **RTOS**: RT-Thread
- **Peripherals**:
  - PIR sensor
  - ALS / light sensor
  - microphone
  - LED / PWM lighting path
  - Wi-Fi
  - display

---

## 5. Software Stack

- RT-Thread Studio
- Edgi-Talk BSP
- RT-Thread RTOS
- local KWS inference pipeline
- Web dashboard / local server
- optional model tools:
  - PyTorch
  - ONNX
  - TFLite / TFLM

---

## 6. System Architecture

```text
Sensors
 ├── PIR
 ├── ALS
 └── Microphone
        ↓
Feature Processing
 ├── Filtering
 ├── Audio preprocessing
 └── Sensor normalization
        ↓
Decision Layer
 ├── Rule-based state machine
 ├── Keyword spotting inference
 └── Multimodal fusion logic
        ↓
Execution Layer
 ├── PWM lighting control
 ├── Local UI display
 └── Web monitoring / configuration
