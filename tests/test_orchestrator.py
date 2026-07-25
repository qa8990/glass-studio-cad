import unittest

from src.agents.orchestrator import AgentOrchestrator


class OrchestratorTests(unittest.TestCase):
    def test_build_project_extracts_dimensions_and_thickness(self) -> None:
        project = AgentOrchestrator().build_project(
            'Quiero una puerta de baño 1200 x 2200 con vidrio de 10 mm.'
        )

        self.assertEqual(project.template, 'pivot_door')
        self.assertEqual(project.dimensions, (1200, 2200))
        self.assertEqual(project.thickness_mm, 10)
        self.assertEqual(project.estimated_panels, 3)
        self.assertEqual(project.estimated_hinges, 2)


if __name__ == '__main__':
    unittest.main()
