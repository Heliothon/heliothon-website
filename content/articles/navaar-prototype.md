---
title: "Heliothon Unveils Navaar Prototype"
excerpt: "A Major Leap Towards Decentralized AI Computing on Edge Devices"
image: "/img/navaar-logo-white.png"
date: "2025-06-01"
---

**FAIRFAX, VIRGINIA – June 1, 2025** – Heliothon today proudly announced the successful prototyping of **Navaar**, its groundbreaking decentralized compute mesh. This significant milestone marks a pivotal step in the organization's mission to democratize advanced artificial intelligence, making it accessible and efficient on widely available, inexpensive hardware like Raspberry Pis and older laptops.
<br></br>

Rather than relying on costly monolithic High-Performance Computing (HPC) clusters or expensive cloud credits, Navaar is designed to harness the untapped power of underutilized edge devices, transforming them into a cohesive, cooperative network capable of running demanding AI workloads.
<br></br>

## **The Navaar Vision: AI for Everyone**
<br></br>

At its core, Navaar is conceived as a fault-tolerant, secure, and self-healing compute grid. It operates on two primary layers:
<br></br>

● **The Edge Layer**, comprising individual "Node Agents" running on volunteer devices that contribute their CPU, GPU, or NPU cycles for AI inference tasks.

● **The Control Layer**, centralized for orchestration, job distribution, and network visibility.
<br></br>

The project is guided by four principles: simplicity of deployment, fault tolerance and resilience, robust security and trust, and modularity and extensibility. These principles ensure Navaar remains accessible, secure, and ready for future growth, including integration with Heliothon's own custom hardware accelerators.
<br></br>

**Prototype Success: A Glimpse into the Future**
<br></br>

The recently completed prototype phase successfully demonstrated the foundational capabilities of the Navaar mesh. Utilizing a standard Ubuntu laptop as the Coordinator and two Raspberry Pi 4 devices as Node Agents, I've established a robust communication and task distribution pipeline.
<br></br>

**Key achievements of the prototype include:**
<br></br>

● **Seamless Communication**: The Coordinator on the laptop successfully communicated with Node Agents on the Raspberry Pis via a Redis-powered message queue, proving efficient task distribution and result aggregation.

● **Distributed Workload**: The prototype demonstrated effective load sharing, with both Raspberry Pis concurrently pulling and processing AI inference tasks from the shared queue.

● **Real AI Model Execution**: Node Agents successfully downloaded and loaded a real MobileNetV2 ONNX model (a popular image classification model) and performed simulated AI inferences using ONNX Runtime. This critical step validated the ability of low-cost edge devices to handle complex AI computations.

● **Resilient Design**: The prototype confirmed the system's ability to recover from minor network disruptions and ensured continuous operation.

● **Overcoming Challenges**: I successfully navigated initial hurdles related to Redis connectivity, data serialization, and correct ONNX model fetching, refining the system with each iteration.
<br></br>

**What's Next for Navaar?**
<br></br>

With the prototype successfully validated, Heliothon is now advancing to the **Minimum Viable Product (MVP)** phase. Future developments will include:
<br></br>

● Enhancing security with encrypted VPNs and sandboxed execution environments.

● Implementing a robust task scheduler for dynamic load balancing and fault tolerance.

● Developing a user-friendly administrative dashboard for real-time mesh monitoring.

● Integrating with Heliothon's future custom AI accelerator hardware to showcase performance-per-watt advantages.
<br></br>

Heliothon invites students, hobbyists, researchers, and small organizations to follow Navaar's journey and consider joining the growing community!
<br></br>