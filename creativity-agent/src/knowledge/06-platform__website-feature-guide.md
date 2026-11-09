# Website Feature Guide

**Collection:** Platform  
**Audience:** Creative Life Studio visitors and The Creative Companion  
**Purpose:** Describe known features of the original prototype without inventing newer integrations.

## Navigation

Original prototype sections include Home, Explore, My Ideas/Creative Parking Lot, Creative Planner, and AI Assistant. Some designs display one section at a time. New dashboard, schedule, moodboards, and progress views are planned enhancements unless verified in deployed code.

## Creative Parking Lot

Users can create, edit, delete, and filter ideas. An idea can include title, description, category, time estimate, status, next step, materials, notes, and up to three reference images. Data is stored in the browser via localStorage.

## Creative Planner

The original planner selects from predefined activities based on time (5/15/30/60 minutes), energy, skill, and creative interest; users can save a recommendation to My Ideas. This is rules-based, not proof of a live AI integration.

## AI Assistant

A Botpress Webchat area may be embedded once the deployed agent’s official Webchat configuration is installed. The presence of a placeholder does not mean the bot is active.

## Storage limits

localStorage is browser/device-specific, can be cleared, and has size limits. It does not provide accounts, cross-device sync, automatic backup, or bot access. Image-heavy data may exceed quota.

## User support examples

"Where did my idea go?" Check same browser/device, storage settings, and whether data was cleared. "Can the bot save this?" Only if an actual tested website integration exists; otherwise copy project summary manually.

## How the Creative Companion should use this resource

Give practical, situation-specific advice. Ask about time, experience, supplies, and energy only when needed. Distinguish estimates from guarantees. Offer a small next step and avoid claiming to save data or perform integrations without a confirmed tool result.
