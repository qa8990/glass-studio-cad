from dataclasses import dataclass
from typing import List


@dataclass
class GlassProject:
    template: str
    dimensions: tuple[int, int]
    thickness_mm: int
    estimated_panels: int
    estimated_hinges: int


class AgentOrchestrator:
    """Orquesta el flujo de entrada a proyecto parametrizado."""

    def build_project(self, prompt: str) -> GlassProject:
        normalized = prompt.lower()
        width, height = 1200, 2200
        thickness = 10

        if "1200" in normalized:
            width = 1200
        if "2200" in normalized:
            height = 2200
        if "10 mm" in normalized or "10mm" in normalized:
            thickness = 10

        return GlassProject(
            template="pivot_door",
            dimensions=(width, height),
            thickness_mm=thickness,
            estimated_panels=3,
            estimated_hinges=2,
        )
