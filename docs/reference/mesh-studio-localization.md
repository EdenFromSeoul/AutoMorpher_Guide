# Mesh Studio 번역 참고

가이드 본문에서 분리한 편집자용 자료입니다. 웹 가이드에는 노출하지 않습니다.

- 갱신일: 2026-09-23
- 기준: Kisetter의 실제 UI 호출 키와 Language_MeshEditor / Language_Kisetter의 한국어·일본어·영어 JSON.
- 번역할 때 표시 문자열이 비슷한 다른 키를 사용하지 말고, 아래 키와 UI 호출부를 함께 확인합니다. 제품 업데이트 후에는 원본 JSON을 다시 확인합니다.
- 한국어 본문의 설명 제목은 자연스럽게 쓸 수 있지만 UI 이름을 인용할 때는 매핑된 명칭을 사용합니다. 예: 설명 제목 “편집 도구 선택”, UI 명칭 “편집 모드(Edit Mode)”.

## 언어 파일

- `../Eden_ClothAutoMorpherTool/Assets/@Eden_Tools/Kisetter/LanguageManager/Language_MeshEditor/Language_{ko,ja,en}.json`
- `../Eden_ClothAutoMorpherTool/Assets/@Eden_Tools/Kisetter/LanguageManager/Language_Kisetter/Language_{ko,ja,en}.json`

## UI 명칭

| 키 | 한국어 | 日本語 | English |
| --- | --- | --- | --- |
| `UI.MeshStudio.Target.Title` | 편집 대상 Mesh | 編集対象 Mesh | Mesh Selection |
| `UI.MeshStudio.Target.Refresh` | 목록 새로고침 | リストを更新 | Refresh Meshes |
| `UI.MeshStudio.SMRList.Main.Header` | Main Mesh | Main Mesh | Main Mesh |
| `UI.MeshStudio.SMRList.Main.Selected` | Main | Main | Main |
| `UI.MeshStudio.SMRList.Mesh.Header` | 편집할 Mesh | 編集するMesh | Meshes to edit |
| `UI.MeshStudio.SMRList.Active.Header` | 활성 상태 | 有効状態 | Active |
| `UI.MeshStudio.SMRList.RestoreOriginal.Title` | 원래대로 되돌리기 | 元に戻す | Revert to Original |
| `UI.MeshStudio.SMRList.RestoreAll.Title` | 전체 되돌리기 | すべて元に戻す | Revert All |
| `UI.MeshStudio.EditSettings.VertexOptionsLocation.Title` | Vertex 조작 옵션 위치 | Vertex 操作オプションの表示先 | Vertex Controls Location |
| `UI.MeshStudio.EditSettings.VertexOptionsLocation.SceneUI` | Scene UI | Scene UI | Scene UI |
| `UI.MeshStudio.EditSettings.VertexOptionsLocation.EditorWindow` | Mesh Studio | Mesh Studio | Mesh Studio |
| `UI.MeshStudio.EditSettings.VertexDisplay.Title` | 정점 표시 설정 | 頂点の表示設定 | Vertex Display |
| `UI.MeshStudio.EditSettings.VertexDisplay.VertexDrawSize.Title` | 정점 크기 | 頂点サイズ | Vertex Size |
| `UI.MeshStudio.EditSettings.VertexDisplay.VertexDrawDistance.Title` | 표시 거리 | 表示距離 | Draw Distance |
| `UI.MeshStudio.EditSettings.VertexDisplay.VertexColor.Title` | 정점 색상 | 頂点の色 | Vertex Color |
| `UI.MeshStudio.EditSettings.Mode.Title` | 편집 모드 | 編集モード | Edit Mode |
| `UI.MeshStudio.EditSettings.Tool.Title` | 도구 설정 | ツール設定 | Tool Settings |
| `UI.MeshStudio.EditSettings.Restore.Brush.VertexControl` | 정점 편집 | 頂点編集 | Vertex Control |
| `UI.MeshStudio.EditSettings.Restore.Brush.Title` | 복원 브러시 | 復元ブラシ | Restore Brush |
| `UI.MeshStudio.Penetration.Title` | 의상 뚫림 해소 | 衣装の貫通を解消 | Resolve Clothing Clipping |
| `UI.MeshStudio.Shrinkwrap.Title` | 밀착 | 密着 | Shrinkwrap |
| `UI.MeshStudio.Relax.Title` | 릴랙스 | リラックス | Relax |
| `UI.MeshStudio.Shrink.Title` | Shrink | Shrink | Shrink |
| `UI.MeshStudio.EditSettings.Brush.WeightMode.Label` | 브러시 가중치 방식 | ブラシの重み付け | Brush Weight Mode |
| `UI.MeshStudio.EditSettings.Brush.Strength.Label` | 브러시 강도 | ブラシ強度 | Brush Strength |
| `UI.MeshStudio.EditSettings.Selection.Delete` | 버텍스 삭제 | 頂点を削除 | Delete Vertices |
| `UI.MeshStudio.BrushReferences.Title` | 기준 Mesh | 基準Mesh | Reference Meshes |
| `UI.MeshStudio.BrushReferences.AutoFind` | 몸 Mesh 찾기 | 体のMeshを探す | Find Body Mesh |
| `UI.MeshStudio.BrushReferences.Gap` | 표면 간격 (mm) | 表面との間隔 (mm) | Surface Gap (mm) |
| `UI.MeshStudio.EditSettings.Restore.BlendShape.Label` | 블렌드셰이프 | ブレンドシェイプ | BlendShape |
| `UI.MeshStudio.EditSettings.Restore.BlendShape.Weight` | 복원 기준 | 復元基準 | Restore Reference |
| `UI.MeshStudio.EditSettings.Restore.Method.Label` | 복원 모드 | 復元モード | Mode |
| `UI.MeshStudio.EditSettings.Restore.Method.Delta` | 원형 복원 | 原形復元 | Original Shape Restore |
| `UI.MeshStudio.EditSettings.Restore.Method.Shape` | 형태 복원 | 形状復元 | Shape Restore |
| `UI.MeshStudio.Shrink.SelectionMethod` | 선택 방법 | 選択方法 | Selection Method |
| `UI.MeshStudio.Shrink.RegularSelection` | 클릭 / 박스 선택 | クリック / 範囲 | Click / Box |
| `UI.MeshStudio.Shrink.BrushSelection` | 브러시 선택 | ブラシ選択 | Brush Select |
| `UI.MeshStudio.Shrink.Select` | 선택 | 選択 | Select |
| `UI.MeshStudio.Shrink.Deselect` | 해제 | 解除 | Deselect |
| `UI.MeshStudio.Shrink.PreviewOn` | 미리보기 켜기 | プレビュー ON | Preview On |
| `UI.MeshStudio.Shrink.PreviewOff` | 미리보기 끄기 | プレビュー OFF | Preview Off |
| `UI.MeshStudio.Shrink.Clear` | 선택 지우기 / 원상복귀 | 選択を消去 / 元に戻す | Clear selection / restore |
| `UI.MeshStudio.Rig.Title` | 의상 웨이트 재계산 및 피즈본 재정렬 | 衣装のウェイト再計算・PhysBone再配置 | Clothing Weight Recalculation / PhysBone Realignment |
| `UI.MeshStudio.Rig.Avatar` | 기준 Avatar | 基準Avatar | Reference Avatar |
| `UI.MeshStudio.Rig.Bodies` | 몸통 Mesh | 身体のMesh | Body Meshes |
| `UI.MeshStudio.Rig.FindBodies` | 몸통 Mesh 자동 할당 | 身体のMeshを自動設定 | Auto-assign Body Mesh |
| `UI.MeshStudio.Rig.PhysBone` | PhysBone 재정렬 | PhysBoneを再配置 | Realign PhysBones |
| `UI.MeshStudio.Rig.WeightScope` | Weight 재계산 범위 | Weightの再計算範囲 | Weight Recalculation Scope |
| `UI.MeshStudio.Rig.EditedMeshes` | 수정한 Mesh | 編集したMesh | Edited Meshes |
| `UI.MeshStudio.Rig.AllMeshes` | Root 아래 전체 Mesh | Root配下のすべてのMesh | All Meshes under Root |
| `UI.MeshStudio.Rig.Weight` | Weight 재계산 | Weightを再計算 | Recalculate Weights |
| `UI.MeshStudio.SaveBake.OpenSave` | 저장하기... | 保存... | Save... |
| `UI.MeshStudio.SaveBake.ApplyToMesh` | Mesh에 적용 | Meshに適用 | Apply to Mesh |
| `UI.MeshStudio.SaveBake.SaveAsBlendShape` | BlendShape로 저장 | BlendShapeとして保存 | Save as BlendShape |
| `UI.MeshStudio.SaveBake.OpenSeparate` | 선택한 매쉬 분리 | 選択したMeshを分離 | Separate Selected Mesh |
| `UI.MeshStudio.SaveBake.DiscardAndExit` | 변경사항 취소 후 나가기 | 変更を破棄して終了 | Discard Change & Exit |
| `UI.MeshStudio.SaveOptions.BlendShapeName` | BlendShape 이름 | BlendShape名 | BlendShape Name |
| `UI.MeshStudio.SaveOptions.Separate.Confirm` | 분리하기 | 分離 | Separate |
| `UI.MeshStudio.Dialog.BlendShapeExists.Overwrite` | 덮어쓰기 | 上書き | Overwrite |
| `UI.MeshStudio.Dialog.SeparateMesh.Cancel` | 취소 | キャンセル | Cancel |
| `UI.MeshEdit.ShowVertices` | 버텍스 표시 | 頂点を表示 | Show Vertices |
| `UI.MeshEdit.ShowOccluded` | 가려진 버텍스 표시 | 隠れた頂点を表示 | Show Occluded |
| `UI.MeshEdit.TransformMode.Move` | W(이동) | W(移動) | W(Move) |
| `UI.MeshEdit.TransformMode.Rotate` | E(회전) | E(回転) | E(Rotate) |
| `UI.MeshEdit.TransformMode.Scale` | R(크기) | R(拡縮) | R(Scale) |
| `UI.MeshEdit.HandleDirection` | 핸들 방향 | ハンドル方向 | Handle Direction |
| `UI.MeshEdit.HandleDirection.World` | 월드 | ワールド | World |
| `UI.MeshEdit.HandleDirection.VertexNormal` | 버텍스 노멀 | 頂点法線 | Vertex Normal |
| `UI.MeshEdit.Symmetry` | 대칭 | 対称 | Symmetry |
| `UI.MeshEdit.SymmetryMove` | 대칭 이동 | 対称移動 | Symmetry Move |
| `UI.MeshEdit.SymmetryMove.Mirror` | 반전 | 反転 | Mirror |
| `UI.MeshEdit.SymmetryMove.Same` | 동일 | 同一 | Same |
| `UI.MeshEdit.SymmetryClip` | 대칭 클리핑 | 対称クリッピング | Symmetry Clipping |
| `UI.MeshEdit.PickMode` | 선택 방식 | 選択方式 | Pick Mode |
| `UI.MeshEdit.PickMode.Euclidean` | 직선 거리 | 直線距離 | Euclidean |
| `UI.MeshEdit.PickMode.Adjacency` | 인접 거리 | 隣接距離 | Adjacency |
| `UI.MeshEdit.WeightMode.Linear` | 선형 | 線形 | Linear |
| `UI.MeshEdit.WeightMode.Gaussian` | 가우시안 | ガウシアン | Gaussian |
| `UI.MeshEdit.WeightMode.Clamp` | 고정 | 固定 | Clamp |
| `UI.MeshEdit.BrushRadius` | 브러시 반경 | ブラシ半径 | Brush Radius |
| `UI.Option.Tab.MeshStudio` | Mesh Studio | Mesh Studio | Mesh Studio |

## 모드별 옵션 확인 메모

- `SceneInteractor.OverlayUI.cs`: 가중치 방식과 선택 방식은 정점 편집에만 표시. Shrink에는 강도 옵션이 없으며 클릭/박스 선택에서는 반경도 숨김. 인접 거리에서는 대칭 축 비활성화.
- `CoreSystem/SceneInteractor.cs`, `Input_Brush`: Shift + 휠로 반경 조절. Ctrl/Command 또는 Caps Lock과 Shift + 휠로 강도 조절. Shrink에서는 강도 조절 입력을 사용하지 않음.
- `SceneInteractor.Brush.cs`: 복원·뚫림 해소·밀착·릴랙스는 Gaussian 가중치를 사용. Shrink는 선택 영역을 칠하며 선택 해제 또는 Shift 드래그로 지움.
- `MeshStudioPanel.BrushReferences.cs` 및 `SceneInteractor.OverlayUI.cs`: 기준 Mesh는 뚫림 해소·밀착·릴랙스에 표시. 표면 간격 입력은 뚫림 해소·밀착에만 표시.
- 검증 수준: 이번 수정에서는 소스와 Language 파일을 대조했으며 Unity 실행 중 동작을 새로 테스트하지 않았음.
