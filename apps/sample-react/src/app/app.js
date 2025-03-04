import { Routes, Route, Link } from 'react-router-dom';

import { PageHome } from './pages/Home';
import { PageButtons } from './pages/Buttons';
import { PageApplicationFrame } from './pages/ApplicationFrame/ApplicationFrame';
import { PageNotificationBadge } from './pages/NotificationBadge';
import { PageBreadcrumb } from './pages/Breadcrumb';

import { PageModalDialog } from './pages/ModalDialog';
import { PageCommandButton } from './pages/CommandButton';
import { PageToast } from './pages/Toast'
import { PageTree } from './pages/Tree'
import { PageFileUpload } from './pages/FIleUpload';
import { PageCommandBar } from './pages/CommandBar'

import PlaygroundCommandBarCommandButtonToggleState from './pages/CommandBar/CommandButtonToggleState';
import { PageInformationBar } from './pages/InformationBar';
import { PageCheckboxGroup } from './pages/CheckboxGroup';
import { PageTabs } from './pages/Tabs'
import { PageTable } from './pages/Table/Table';
import { PageTableIssues } from './pages/Table/TableIssues';
import { PageMenu } from './pages/Menu';
import { PageIcons } from './pages/Icons'
import { PageTooltip} from './pages/Tooltip'
import {PageSplitter} from './pages/Splitter';
import {PageAvatar} from './pages/Avatar/Avatar';
import {PageAvatarPrimaryNavigation} from './pages/Avatar/AvatarPrimaryNavigation'
import { PageRadioButtonGroup } from './pages/RadioButtonGroup';
import { PageRadioButtonCaseFormIntegration } from './pages/RadioButton/FormIntegration';
import { PageRadioButtonCaseControlledNUnControlled } from './pages/RadioButton/ControlledNUnControlled';
import { PageDatePickerCaseFormIntegration } from './pages/DatePicker/FormIntegration';
import { PageDatePickerCaseControlledNUnControlled } from './pages/DatePicker/ControlledNUnControlled';
import {PagePanel} from './pages/Panel/Panel';
import { PagePanelIssue578 } from './pages/Panel/PanelIssue578'
import { PagePanelSection } from './pages/PanelSection/PanelSection';
import { PagePanelSectionCaseControlledNUnControlled } from './pages/PanelSection/ControlledNUnControlled';
import { PagePanelSectionCaseNestedTable } from './pages/PanelSection/NestedTablePanelSection'
import {PagePanelSectionCaseMultipleColumns} from './pages/PanelSection/PanelSectionMultipleColumns'
import {PageComboBox} from './pages/ComboBox';
import { PagePrimaryNavigation } from './pages/PrimaryNavigation/PrimaryNavigation';
import { PagePrimaryNavigationPanel } from './pages/PrimaryNavigation/PrimaryNavigationPanel';
import { PagePrimaryNavigationIssue422 } from './pages/PrimaryNavigation/PrimaryNavigationIssue422'
import { PagePrimaryNavigationPanelIssue356 } from './pages/PrimaryNavigation/PrimaryNavigationPanelIssue356'
import { PagePrimaryNavigationPanelIssue417 } from './pages/PrimaryNavigation/PrimaryNavigationPanelIssue417'
import { PageTimePickerCaseControlledNUnControlled } from './pages/TimePicker/ControlledNUnControlled'
import { PageTimePickerCaseFormIntegration} from './pages/TimePicker/FormIntegration'
import { PageAccordion } from './pages/Accordion/Accordion'
import { PageViewTable } from './pages/ViewTable';
import { PageProgressBar } from './pages/ProgressBar'
import { PageFloatingButton } from './pages/FloatingButton'
import { PageSegmentedButton } from './pages/SegmentedButton'
import { PageProgressStepper } from './pages/ProgressStepper'
import { PageInputField} from './pages/InputField'

import DropdownReduxSamplePage from './pages/Dropdown/Redux';
import { PageSlider } from './pages/Slider';
import {PageDropdown} from './pages/Dropdown'
import { PageApplicationFramePlayground } from './pages/ApplicationFrame/PageApplicationFramePlayground';

import ColorSchemeSelector from './components/ColorSchemeSelector';

import '@my-lib-org/mylib-core-styles/css/mylib-icons--js-import.css';

import './app.scss';


const App = () => {
  return (
    <>
      <header>
        <h2>Mylib - Sample React App</h2>
        <div className="spacer"></div>
        <ColorSchemeSelector className="toolbar-item" />
      </header>
      <section>
        <nav className="toolbar-scroll">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mylib-button">Button</Link>
            </li>
            <li>
              <label>Application Frame</label>
              <ul>
                <li>
                  <Link to="/mylib-application-frame">Application Frame</Link>
                </li>
                <li>
                  <Link to="/mylib-application-frame/PlaygroundCustomApplicationFrame">Application Frame / Custom Example</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/mylib-notification-badge">Notification Badge</Link>
            </li>
            <li>
              <Link to="/mylib-breadcrumb">Breadcrumbs</Link>
            </li>
            <li>
              <label>Primary Navigation</label>
              <ul>
                <li>
                  <Link to="/mylib-primary-navigation">Primary Navigation</Link>
                </li>
                <li>
                  <Link to="/mylib-primary-navigation/PrimaryNavigationIssue422">Primary Navigation 422</Link>
                </li>
              </ul>
            </li>
            <li>
              <label>Primary Navigation Panel</label>
              <ul>
                <li>
                  <Link to="/mylib-primary-navigation-panel">Primary Navigation Panel</Link>
                </li>
                <li>
                  <Link to="/mylib-primary-navigation/PrimaryNavigationPanelIssue356">Primary Navigation Panel 356</Link>
                </li>
              </ul>
            </li>
            <li>
              <label>Panel</label>
              <ul>
                <li>
                  <Link to="/mylib-panel">Panel Issue #403</Link>
                </li>
                <li>
                  <Link to="/mylib-panel-issue-578">Panel Issue #578</Link>
                </li>
              </ul>
            </li>
            <li>
              <label>Panel Section</label>
              <ul>
                <li>
                  <Link to="/mylib-panel-section">Panel Section</Link>
                </li>
                <li>
                  <Link to="/mylib-panel-section/controlled_n_uncontrolled">Controlled / UnControlled</Link>
                </li>
                <li>
                  <Link to="/mylib-panel-section/nested_table">Nested Table</Link>
                </li>
                <li>
                  <Link to="/mylib-panel-section/multiple_columns">Multiple Columns Case</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/mylib-modal-dialog">Modal Dialog</Link>
            </li>
            <li>
              <Link to="/mylib-command-button">Command Button</Link>
            </li>
            <li>
              <Link to="/mylib-toast">Toast</Link>
            </li>
            <li>
              <Link to="/mylib-tree">Tree</Link>
            </li>
            <li>
              <Link to="/mylib-tabs">Tabs</Link>
            </li>
            <li>
              <Link to="/mylib-file-upload">File Upload</Link>
            </li>
            <li>
              <Link to="/mylib-dropdown">Dropdown</Link>
            </li>
            <li>
              <Link to="/mylib-information-bar">Information Bar</Link>
            </li>
            <li>
              <Link to="/mylib-radio-button-group">Radio Button Group</Link>
            </li>
            <li>
              <label>Radio Button</label>
              <ul>
                <li>
                  <Link to="/mylib-radio-button/form-integration">Form Integration</Link>
                </li>
                <li>
                  <Link to="/mylib-radio-button/controlled_n_uncontrolled">Controlled / UnControlled</Link>
                </li>
              </ul>
            </li>
            <li>
              <label>Date Picker</label>
              <ul>
                <li>
                  <Link to="/mylib-datepicker/form-integration">Form Integration</Link>
                </li>
                <li>
                  <Link to="/mylib-datepicker/controlled_n_uncontrolled">Controlled / UnControlled</Link>
                </li>
              </ul>
            </li>
            <li>
              <label>Time Picker</label>
              <ul>
              <li>
                  <Link to="/mylib-timepicker/form-integration">Form Integration</Link>
                </li>
                <li>
                  <Link to="/mylib-timepicker/controlled_n_uncontrolled">Controlled / UnControlled</Link>
                </li>
              </ul>
            </li>
            <li>
              <label>Table</label>
              <ul>
                <li>
                  <Link to="/mylib-table">Table</Link>
                </li>
                <li>
                  <Link to="/mylib-table/PageTableIssues">Table Issues(#354,#356,#346,#384)</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/mylib-table">Table</Link>
            </li>
            <li>
              <Link to="/mylib-view-table">View Table</Link>
            </li>
            <li>
              <label>CommandBar</label>
            </li>
            <li>
              <Link to="/mylib-splitter">Splitter</Link>
            </li>
            <li>
              <Link to="/mylib-slider">Slider</Link>
            </li>
            <li>
              <Link to="/mylib-segmented-button">Segmented Button</Link>
            </li>
            <li>
              <label>CommandBar</label>
              <ul>
                <li>
                  <Link to="/mylib-command-bar">Command Bar</Link>
                </li>
                <li>
                  <Link to="/mylib-command-bar/CommandButtonToggleState">Command Bar / CommandButton Toggle State</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/mylib-icons">Icons</Link>
            </li>
            <li>
              <Link to="/mylib-checkbox-group">Checkbox Group</Link>
            </li>
            <li>
              <Link to="/mylib-tooltip">Tootip</Link>
            </li>
            <li>
              <Link to="/mylib-combo-box">ComboBox</Link>
            </li>
            <li>
              <Link to="/mylib-Accordion">Accordion</Link>
            </li>
            <li>
              <Link to="/mylib-menu">Menu</Link>
            </li>
            <li>
              <Link to="/mylib-progress-bar">Progress Bar</Link>
              </li>
              <li>
              <Link to="/mylib-progress-stepper">Progress Stepper</Link>
              </li>
              <li>
              <Link to="/mylib-floating-button">Floating Button</Link>
            </li>
            <li>
              <label>Avatar</label>
              <ul>
                <li>
                  <Link to="/mylib-avatar">Avatar</Link>
                </li>
                <li>
                  <Link to="/mylib-avatar/AvatarPrimaryNavigation"> Primary Navigation using Avatar</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/mylib-input-field">Input Field</Link>
            </li>
            <li>
              <label>Playground</label>
              <ul>
                <label>Dropdown</label>
                <li>
                  <Link to="/mylib-dropdown/samples/redux">Dropdown Redux Sample</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" exact element={<PageHome />} />
            <Route path="/mylib-button" exact element={<PageButtons />} />
            <Route
              path="/mylib-application-frame"
              exact
              element={<PageApplicationFrame />}
            />
            <Route
              path="/mylib-notification-badge"
              exact
              element={<PageNotificationBadge />}
            />
            <Route
              path="/mylib-breadcrumb"
              exact
              element={<PageBreadcrumb />}
            />
            <Route
              path="/mylib-dropdown"
              exact
              element={<PageDropdown />}
            />
            <Route
              path="/mylib-primary-navigation"
              exact
              element={<PagePrimaryNavigation />}
            />
            <Route
              path="/mylib-accordion"
              exact
              element={<PageAccordion />}
            />
             <Route
              path="/mylib-primary-navigation-panel"
              exact
              element={<PagePrimaryNavigationPanel />}
            />
             <Route
              path="/mylib-primary-navigation/PrimaryNavigationIssue422"
              exact
              element={<PagePrimaryNavigationIssue422 />}
            />
            <Route
              path="/mylib-primary-navigation/PrimaryNavigationPanelIssue356"
              exact
              element={<PagePrimaryNavigationPanelIssue356 />}
            />
             <Route
              path="/mylib-primary-navigation/PrimaryNavigationPanelIssue417"
              exact
              element={<PagePrimaryNavigationPanelIssue417 />}
            />
            <Route
              path="/mylib-modal-dialog"
              exact
              element={<PageModalDialog />}
            />
            <Route
              path='/mylib-command-button'
              exact
              element={<PageCommandButton />}
            />
            <Route
              path="/mylib-toast"
              exact
              element={<PageToast />}
            />
            <Route
              path="/mylib-tree"
              exact
              element={<PageTree />}
            />
            <Route
              path="/mylib-file-upload"
              exact
              element={<PageFileUpload />}
            />
            <Route
              path="/mylib-information-bar"
              exact
              element={<PageInformationBar />}
            />
            <Route
              path="/mylib-splitter"
              exact
              element={<PageSplitter />}
            />
            <Route
              path="/mylib-slider"
              exact
              element={<PageSlider />}
            />
            <Route
              path="/mylib-segmented-button"
              exact
              element={<PageSegmentedButton />}
            />
            <Route
              path="/mylib-table"
              exact
              element={<PageTable />}
            />
            <Route
              path="/mylib-table/PageTableIssues"
              exact
              element={<PageTableIssues />}
            />
            <Route
              path="/mylib-radio-button-group"
              exact
              element={<PageRadioButtonGroup />}
            />
            <Route
              path="/mylib-avatar"
              exact
              element={<PageAvatar />}
            />
            <Route
              path="/mylib-avatar/AvatarPrimaryNavigation"
              exact
              element={<PageAvatarPrimaryNavigation />}
            />
            <Route
              path="/mylib-radio-button/form-integration"
              exact
              element={<PageRadioButtonCaseFormIntegration />}
            />
             <Route
              path="/mylib-panel"
              exact
              element={<PagePanel />}
            />
            <Route
              path="/mylib-panel-issue-578"
              exact
              element={<PagePanelIssue578 />}
            />
            <Route
              path="/mylib-panel-section"
              exact
              element={<PagePanelSection />}
            />
            <Route
              path="/mylib-panel-section/controlled_n_uncontrolled"
              exact
              element={<PagePanelSectionCaseControlledNUnControlled />}

            />
            <Route
              path="/mylib-panel-section/nested_table"
              exact
              element={<PagePanelSectionCaseNestedTable />}

            />
            <Route
              path="/mylib-panel-section/multiple_columns"
              exact
              element={<PagePanelSectionCaseMultipleColumns />}

            />

            <Route
              path="/mylib-radio-button/controlled_n_uncontrolled"
              exact
              element={<PageRadioButtonCaseControlledNUnControlled />}

            />
            <Route
              path="/mylib-datepicker/form-integration"
              exact
              element={<PageDatePickerCaseFormIntegration />}

            />
            <Route
              path="/mylib-datepicker/controlled_n_uncontrolled"
              exact
              element={<PageDatePickerCaseControlledNUnControlled />}

            />
            <Route
              path="/mylib-timepicker/form-integration"
              exact
              element={<PageTimePickerCaseFormIntegration />}

            />
            <Route
              path="/mylib-timepicker/controlled_n_uncontrolled"
              exact
              element={<PageTimePickerCaseControlledNUnControlled />}

            />
            <Route
              path="/mylib-command-bar"
              exact
              element={<PageCommandBar />}
            />
            <Route
              path="/mylib-command-bar/CommandButtonToggleState"
              exact
              element={<PlaygroundCommandBarCommandButtonToggleState />}
            />
            <Route
              path="/mylib-checkbox-group"
              exact
              element={<PageCheckboxGroup />}
            />
            <Route
              path="/mylib-menu"
              exact
              element={<PageMenu />}
            />
            <Route
              path="/mylib-progress-bar"
              exact
              element={<PageProgressBar />}
              />
              <Route
              path="/mylib-progress-stepper"
              exact
              element={<PageProgressStepper />}
              />
            <Route
              path="/mylib-floating-button"
              exact
              element={<PageFloatingButton />}
            />
            <Route
              path="/mylib-application-frame/PlaygroundCustomApplicationFrame"
              exact
              element={<PageApplicationFramePlayground />}
            />
            <Route
              path="/mylib-icons"
              exact
              element={<PageIcons />}
            />
            <Route
              path="/mylib-tooltip"
              exact
              element={<PageTooltip />}
            />
            <Route
              path="/mylib-combo-box"
              exact
              element={<PageComboBox />}
            />
            <Route
              path="/mylib-tabs"
              exact
              element={<PageTabs />}
            />
            <Route
              path="/mylib-input-field"
              exact
              element={<PageInputField />}
            />
            <Route
              path="/mylib-dropdown/samples/redux"
              exact
              element={<DropdownReduxSamplePage />}
            />
            <Route
              path="/mylib-view-table"
              exact
              element={<PageViewTable />}
            />
          </Routes>
        </main>
      </section>
    </>
  );
};

export default App;
