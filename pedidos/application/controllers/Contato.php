<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Contato extends CI_Controller {

	function __construct()
    {
        parent::__construct();
        $this->load->model('ContatoModel', 'contato', TRUE);
		$this->load->helper('url');
    } 
	 
	public function get_contato($id){
		$contatos = $this->contato->get_contato($id);
		$response = array();
		foreach($contatos as $res){
			$user = array();
			$user["id"] = $res->id;
			$user["name"] = $res->name;
			$user["email"] = $res->email;
			$user["contact_second_id"] = $res->contact_second_id;
			$user["about"] = $res->about;
			$user["type"] = $res->type;
			$user["id_contato"] = $res->id_contato;
			$user["who_recommended"] = $res->who_recommended;
			$user["photo"] = $res->who_recommended;
			array_push($response, $user);
		}
		echo json_encode($response);
	}


	public function get_contato_message($id){
		$contatos = $this->contato->get_contato_message($id);
		$response = array();
		foreach($contatos as $res){
			$user = array();
			$user["id"] = $res->id;
			$user["name"] = $res->name;
			$user["email"] = $res->email;
			$user["contact_second_id"] = $res->contact_second_id;
			$user["about"] = $res->about;
			$user["type"] = $res->type;
			$user["id_contato"] = $res->id_contato;
			$user["who_recommended"] = $res->who_recommended;
			$user["photo"] = $res->who_recommended;
			array_push($response, $user);
		}
		echo json_encode($response);
	}

	public function get_contato_message_paciente($id){
		$contatos = $this->contato->get_contato_message_paciente($id);
		$response = array();
		foreach($contatos as $res){
			$user = array();
			$user["id"] = $res->id;
			$user["name"] = $res->name;
			$user["email"] = $res->email;
			$user["contact_second_id"] = $res->contact_second_id;
			$user["about"] = $res->about;
			$user["type"] = $res->type;
			$user["id_contato"] = $res->id_contato;
			$user["who_recommended"] = $res->who_recommended;
			$user["photo"] = $res->who_recommended;
			array_push($response, $user);
		}
		echo json_encode($response);
	}



    public function salvar($token){
        $msg = "";
        $request = array();
        $json = file_get_contents('php://input');
        $request = json_decode($json, true);
        $permission_message = "";
        $flag_update = "";
        $id = $token;

        if(!empty($request))
        {
            foreach ($request as $key => $val) 
            {
 				if($key == "permission_message"){
                    $permission_message = $val;
                }else if($key == "flag_update"){
                    $flag_update = $val;
                } else {
                    $msg = "valor enviado invalido";
                }
            }

            $dados = array(
            	'id' => $id,
                'permission_message' => ($permission_message == false) ? '0' : '1',

            );
            $this->db->where('id', $id);
            $this->db->update('ls_contact', $dados);
            $msg = $id."|sucesso";
        }
        echo $msg;
    }
}